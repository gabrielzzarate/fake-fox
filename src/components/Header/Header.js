import React from 'react';
import styles from './styles.css';
import layout from '../../styles/layout.css';
import Logo from '../Logo/Logo';
import UserAccount from '../UserAccount/UserAccount';

const Header = () => {
	return (
		<header className={styles.Header}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={layout.columnLeft}>
						<Logo />
					</div>

					<div className={layout.columnRight}>
						<a href="#" className={styles.link}>Account</a>
						<a href="#" className={styles.link}>Help</a>
						<UserAccount className={styles.link} />
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;