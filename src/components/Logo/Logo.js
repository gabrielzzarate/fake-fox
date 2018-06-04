import React from 'react';
import styles from './styles.css';
import logo from '../../images/logo.png';

const Logo = () => {
	return (
		<a
			href="#"
			className={styles.Logo}
		>
			<img src={logo} alt="Fake Fake Ltd." />
		</a>
	);
}

export default Logo;