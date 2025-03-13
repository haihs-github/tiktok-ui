import classNames from "classnames/bind";
import styles from './Button.module.scss'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button(
	{
		to,
		href,
		onClick,
		primary,
		outline,
		text,
		rounded,
		disable,
		small,
		large,
		leftIcon,
		rightIcon,
		children,
		className,
		...passProps
	}) {
	let Comp = 'button';
	const props = {
		onClick,
		...passProps,
	}

	if (to) {
		props.to = to
		Comp = Link
	} else if (href) {
		props.href = href
		Comp = 'a'
	}

	if (disable) {
		Object.keys(props).forEach(key => {
			if (key.startsWith('on') && typeof props[key] === 'function') {
				delete props[key]
			}
		});
	}

	const classes = cx('wrapper', {
		primary,
		small,
		outline,
		rounded,
		text,
		large,
		disable,
		[className]: className,
	});



	return (
		<Comp className={classes}
			{...props}
		>
			<span className={cx('title')}>{children}</span>

		</Comp>
	);
}

export default Button;