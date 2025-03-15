import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Image from "../Layout/componenets/Image";

const cx = classNames.bind(styles)

function AccountItem() {
	return (
		<div className={cx('wrapper')}>
			<Image className={cx('avatar')} src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/20afefef58de8f1b9040f302ef5f71ae~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=70859a7c&x-expires=1741968000&x-signature=OsPAgb9oBK3bsqLCI0IHaxgrDyE%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" alt="Hoa" />
			<div className={cx('info')}>
				<h4 className={cx('name')}>
					<span >Nguyen Van A</span>
					<FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
				</h4>
				<span className={cx('username')}>nguyenvaa</span>
			</div>
		</div>
	);
}

export default AccountItem;