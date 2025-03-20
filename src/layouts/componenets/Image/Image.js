import images from "~/assets/images/Images";
import { useState } from "react";
import styles from './Image.module.scss'
import classNames from "classnames";
import PropTypes from "prop-types";

function Image({ src, alt, className, ...props }) {
	const [falseback, setFalseback] = useState('')
	const handleError = () => {
		setFalseback(images.noImage)
	}
	return (<img className={classNames(className, styles.wrapper)} src={falseback || src} alt={alt} {...props} onError={handleError} />);
}
Image.propTypes = {
	src: PropTypes.string,
	alt: PropTypes.string,
	className: PropTypes.string,
}

export default Image;