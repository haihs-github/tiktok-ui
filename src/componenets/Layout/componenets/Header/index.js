// thư viện
import classNames from 'classnames/bind';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleQuestion, faCircleXmark, faEarthAsia, faEllipsisVertical, faKeyboard, faMagnifyingGlass, faSpinner, faCloudArrowUp, faUser, faCoins, faGear, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

// scss module
import styles from './Header.module.scss'

// Comp
import { Wrapper as PopperWrapper } from '~/componenets/Popper';
import AccountItem from '~/componenets/AccountItems';
import Button from '~/componenets/Button';
import Menu from '~/componenets/Popper/Menu';
import Image from './Image';


const cx = classNames.bind(styles)
const MENU_ITEMS = [
	{
		icon: <FontAwesomeIcon icon={faEarthAsia} />,
		title: 'English',
		children: {
			title: 'Language',
			data: [
				{
					type: 'language',
					code: 'en',
					title: "English"
				},
				{
					type: 'language',
					code: 'vi',
					title: 'Tiếng Việt'
				}
			]
		}
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
	const currentUser = true

	const handleMenuChange = (menuItem) => {
		console.log(menuItem);
	}

	const userMenu = [
		{
			icon: <FontAwesomeIcon icon={faUser} />,
			title: 'View profile',
			to: '/@haii'
		},
		{
			icon: <FontAwesomeIcon icon={faCoins} />,
			title: 'Get coins',
			to: '/coin'
		},
		{
			icon: <FontAwesomeIcon icon={faGear} />,
			title: 'Setting',
			to: '/setting'
		},
		...MENU_ITEMS,
		{
			icon: <FontAwesomeIcon icon={faSignOut} />,
			title: 'Log out',
			to: '/logout',
			separate: true
		},
	]

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<img src={images.logo} alt='logo' />
				<HeadlessTippy
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
				</HeadlessTippy>
				<div className={cx('actions')}>
					{currentUser ? (
						<> <Tippy
							delay={[0, 200]}
							content="upload video"
							placement='bottom'
						>
							<button className={cx('actions-btn')}>
								<FontAwesomeIcon icon={faCloudArrowUp} />
							</button>
						</Tippy>
						</>
					) : (
						<>
							<Button text>upload</Button>
							<Button primary >Log in</Button>

						</>
					)}
					<Menu
						items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}
					>
						{currentUser ?
							(
								<Image className={cx('user-avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/6c1ad7da377a4185eabb429a85588d77~tplv-tiktokx-cropcenter:720:720.jpeg?dr=14579&refresh_token=29adae28&x-expires=1742050800&x-signature=R3V3dFPuoueTT4NLwxRZKbFVOWw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my" alt='nva' />
							) : (
								<button className={cx('more-btn')}>
									<FontAwesomeIcon icon={faEllipsisVertical} />
								</button>
							)}
					</Menu>
				</div>
			</div >
		</header >
	);
}

export default Header;