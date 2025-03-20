import Tippy from "@tippyjs/react/headless"
import classNames from "classnames/bind";
import { Wrapper as PopperWrapper } from '~/componenets/Popper'
import styles from './Menu.module.scss'
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";
import PropTypes from "prop-types";

const cx = classNames.bind(styles)

function Menu({ children, items = [], onChange, hideOnClick = false }) {
	const [history, setHistory] = useState([{ data: items }])
	const current = history[history.length - 1]

	const renderItems = () => {
		return current.data.map((item, index) => {
			const isParent = !!item.children
			return (
				<MenuItem
					key={index}
					data={item}
					onClick={() => {
						if (isParent) {
							setHistory(prev => [...prev, item.children])
						} else {
							onChange(item)
						}
					}}
				/>
			)
		})
	}

	const handleResetMenu = () => {
		setHistory(prev => prev.slice(0, 1))
	}

	const handleBack = () => {
		setHistory(prev => prev.slice(0, prev.length - 1))
	}

	return (
		<Tippy
			interactive
			placement='bottom-end'
			delay={[0, 700]}
			offset={[12, 8]}
			hideOnClick={hideOnClick}
			render={(attrs) => (
				<div className={cx('menu-list')} tabIndex="-1" {...attrs}>
					<PopperWrapper className={cx('menu-popper')}>
						{history.length > 1 && <Header title={current.title}
							onBack={handleBack} />}
						<div className={cx('menu-body')}>{renderItems()}</div>
					</PopperWrapper>
				</div>
			)}
			onHide={() => handleResetMenu}
		>
			{children}
		</Tippy>
	);
}

Menu.propTypes = {
	children: PropTypes.node,
	items: PropTypes.array,
	onChange: PropTypes.func,
	hideOnClick: PropTypes.bool,
}

export default Menu;