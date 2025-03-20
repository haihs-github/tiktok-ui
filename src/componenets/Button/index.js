import classNames from "classnames/bind";
import styles from './Button.module.scss'
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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
			{leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
			<span className={cx('title')}>{children}</span>
			{rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

		</Comp>
	);
}

Button.propTypes = {
	to: PropTypes.string,
	href: PropTypes.string,
	primary: PropTypes.bool,
	outline: PropTypes.bool,
	text: PropTypes.bool,
	rounded: PropTypes.bool,
	disable: PropTypes.bool,
	small: PropTypes.bool,
	large: PropTypes.bool,
	leftIcon: PropTypes.node,
	rightIcon: PropTypes.node,
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
}

export default Button;