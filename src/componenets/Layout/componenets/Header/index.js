// thư viện
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

// scss module
import styles from './Header.module.scss'

// Comp
import { Wrapper as PopperWrapper } from '~/componenets/Popper';
import AccountItem from '~/componenets/AccountItems';
import Button from '~/componenets/Button';
import Menu from '~/componenets/Popper/Menu';


const cx = classNames.bind(styles)
const MENU_ITEMS = [
	{
		icon: <FontAwesomeIcon icon={faEarthAsia} />,
		title: 'English'
	},
	{
		icon: <FontAwesomeIcon icon={faCircleQuestion} />,
		title: 'Feedback and help',
		to: '/feedback'
	}, {
		icon: <FontAwesomeIcon icon={faKeyboard} />,
		title: 'Keyboard shortcuts'
	},
]

function Header() {
	const [searchResult] = useState([])

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<img src={images.logo} alt='logo' />
				<Tippy
					visible={searchResult.length > 0}
					render={(attrs) => (
						<div className={cx('search-result')} tabIndex="-1" {...attrs}>
							<PopperWrapper>
								<h4 className={cx("search-title")}>
									Accounts
								</h4>
								<AccountItem />
								<AccountItem />
								<AccountItem />
							</PopperWrapper>
						</div>
					)}
				>
					<div className={cx('search')}>
						<input placeholder='Search account and videos' spellCheck='false' />
						<button className={cx('clear')}>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
						<FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

						<button className={cx('search-btn')}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
						</button>
					</div>
				</Tippy>
				<div className={cx('actions')}>
					<Button text>upload</Button>
					<Button primary >Log in</Button>
					<Menu
						items={MENU_ITEMS}
					>
						<button className={cx('more-btn')}>
							<FontAwesomeIcon icon={faEllipsisVertical} />
						</button>
					</Menu>
				</div>
			</div>
		</header >
	);
}

export default Header;