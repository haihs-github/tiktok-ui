import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss'
import Button from "~/componenets/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountPreview() {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('header')}>
				<img
					className={cx('avatar')}
					src='https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/6c1ad7da377a4185eabb429a85588d77~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=29adae28&x-expires=1742050800&x-signature=R3V3dFPuoueTT4NLwxRZKbFVOWw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my'
					alt=""
				/>
				<Button className={cx('following-btn')} primary>Follow</Button>
			</div>
			<div className={cx('body')}>
				<p className={cx('nickname')}>
					<strong>hoangsonhai</strong>
					<FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
				</p>
				<p className={cx('name')}>Hoang Son Hai</p>
				<p className={cx('analytics')}>
					<strong className={cx('value')}>8.2M </strong>
					<span className={cx('label')}>Followers</span>
					<strong className={cx('value')}>18.2M </strong>
					<span className={cx('label')}>Likes</span>
				</p>
			</div>
		</div>
	);
}

export default AccountPreview;