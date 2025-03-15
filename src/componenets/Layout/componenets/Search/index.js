import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/componenets/AccountItems';
import { Wrapper as PopperWrapper } from '~/componenets/Popper';
import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles)

function Search() {
	const [searchResult, setSearchResult] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [showResult, setShowResult] = useState(true)

	const inputRef = useRef()


	useEffect(() => {
		setTimeout(() => {
			setSearchResult([1, 2, 3])
		}, 0)
	}, [])

	const handleClear = () => {
		setSearchValue('')
		setSearchResult([])
		inputRef.current.focus()
	}

	const handleHideResult = () => {
		setShowResult(false)
	}
	console.log('showResults', showResult);

	return (
		<HeadlessTippy
			interactive
			visible={searchResult.length > 0 && showResult}
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
			onClickOutside={handleHideResult}
		>
			<div className={cx('search')}>
				<input
					ref={inputRef}
					placeholder='Search account and videos'
					spellCheck='false'
					onChange={(e) => { setSearchValue(e.target.value) }}
					onFocus={() => { setShowResult(true) }}
					value={searchValue}
				/>

				{!!searchValue.length && (
					<button className={cx('clear'

					)}
						onClick={() => { handleClear() }}
					>
						<FontAwesomeIcon icon={faCircleXmark} />
					</button>
				)}
				{/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

				<button className={cx('search-btn')}>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</div>
		</HeadlessTippy>
	);
}

export default Search;