// import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles)

function AccountItem() {
	return (
		<div className={cx('account-item')}>
			<img
				className={(cx('avatar'))}
				src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/6c1ad7da377a4185eabb429a85588d77~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=29adae28&x-expires=1742050800&x-signature=R3V3dFPuoueTT4NLwxRZKbFVOWw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my'
				alt=""
			/>
			<div className={cx('item-info')}>
				<p className={cx('nickname')}>
					<strong>hoanghai</strong>
					<FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
				</p>
				<p className={cx('name')}>
					Hoang Son Hai
				</p>
			</div>
		</div>
	);
}

AccountItem.propTypes = {

}

export default AccountItem;