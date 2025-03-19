import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/componenets/AccountItems';
import { Wrapper as PopperWrapper } from '~/componenets/Popper';
import { useEffect, useState, useRef } from 'react';
import { useDebounce } from '~/hooks';
import classNames from 'classnames/bind';
import styles from './Search.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as request from '~/utils/request';

const cx = classNames.bind(styles)

function Search() {
	const [searchResult, setSearchResult] = useState([])
	const [searchValue, setSearchValue] = useState('')
	const [showResult, setShowResult] = useState(true)
	const [loading, setLoading] = useState(false)
	const debounced = useDebounce(searchValue, 500)

	const inputRef = useRef()


	useEffect(() => {
		if (!debounced.trim()) {
			setSearchResult([])
			return
		}

		setLoading(true)

		request.get(`users/search`, {
			params: {
				q: debounced,
				type: 'less'
			}
		})
			.then(res => {
				setSearchResult(res.data)
				setLoading(false)
			})
			.catch(() => {
				setLoading(false)
			})


	}, [debounced])

	const handleClear = () => {
		setSearchValue('')
		setSearchResult([])
		inputRef.current.focus()
	}

	const handleHideResult = () => {
		setShowResult(false)
	}

	const handleChange = (e) => {
		const searchValue = e.target.value
		if (searchValue.startsWith(" ")) {
			return
		}
		setSearchValue(searchValue)
	}


	return (
		<div>
			<HeadlessTippy
				interactive
				appendTo={() => document.body}
				visible={searchResult.length > 0 && showResult}
				render={(attrs) => (
					<div className={cx('search-result')} tabIndex="-1" {...attrs}>
						<PopperWrapper>
							<h4 className={cx("search-title")}>
								Accounts
							</h4>
							{searchResult.map((result) => (
								<AccountItem key={result.id} data={result} />
							))}
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
						onChange={handleChange}
						onFocus={() => { setShowResult(true) }}
						value={searchValue}
					/>

					{!!searchValue.length && !loading && (
						<button className={cx('clear'

						)}
							onClick={() => { handleClear() }}
						>
							<FontAwesomeIcon icon={faCircleXmark} />
						</button>
					)}
					{loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
					<button className={cx('search-btn')} onMouseDown={e => e.preventDefault}>
						{<FontAwesomeIcon icon={faMagnifyingGlass} />}
					</button>
				</div>
			</HeadlessTippy>
		</div>
	);
}

export default Search;