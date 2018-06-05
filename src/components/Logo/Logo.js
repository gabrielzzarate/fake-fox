import React from 'react';
import styles from './styles.css';
import logo from '../../images/logo.png';

const Logo = () => {
	return (
		<a
			href="#"
			className={styles.logo}
		>
			<img src={logo} alt="Fake Fox" />
		</a>
	);
}

export default Logo;