import React from 'react';
import styles from './styles.css';
import layout from '../../styles/layout.css';

import Logo from '../Logo/Logo';
import LinkNavigation from '../LinkNavigation/LinkNavigation';

const Footer = () => {
	return (
		<footer>
			<div className={layout.container}>
				<LinkNavigation />

				<div className={styles.footerNav}>
					<hr />
					<div className={layout.row}>
						<div className={styles.columnLogo}>
							<Logo />
						</div>
						<div className={styles.columnContent}>
							<a href="#" className={styles.link}>Terms</a>
							<a href="#" className={styles.link}>Privacy</a>
							<a href="#" className={styles.link}>Site Map</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;