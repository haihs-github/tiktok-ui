import images from "~/assets/images";
import { useState } from "react";
import styles from './Image.module.scss'
import classNames from "classnames";

function Image({ src, alt, className, ...props }) {
	const [falseback, setFalseback] = useState('')
	const handleError = () => {
		setFalseback(images.noImage)
	}
	return (<img className={classNames(className, styles.wrapper)} src={falseback || src} alt={alt} {...props} onError={handleError} />);
}

export default Image;