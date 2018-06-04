import React from 'react';
import styles from './styles.css';

const Button = ({ active, children}) => {
	return (
		<a
			href="#"
			className={styles.Button}
		>
			{children}
		</a>
	);
}

export default Button;