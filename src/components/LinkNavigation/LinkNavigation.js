import React from 'react';
import styles from './styles.css';
import layout from '../../styles/layout.css';

const LinkNavigation = () => {
	return (
		<div className={layout.row}>
			<div className={styles.column}>
				<a href="#" className={styles.linkHeading}>Fakesite</a>
				<a href="#" className={styles.link}>About Us</a>
				<a href="#" className={styles.link}>Press</a>
				<a href="#" className={styles.link}>Policies</a>
				<a href="#" className={styles.link}>Help</a>
			</div>
			<div className={styles.column}>
				<a href="#" className={styles.linkHeading}>Account</a>
				<a href="#" className={styles.link}>Edit Profile</a>
				<a href="#" className={styles.link}>Friends</a>
				<a href="#" className={styles.link}>Social</a>
				<a href="#" className={styles.link}>Delete Profile</a>
			</div>
		</div>
	);
}

export default LinkNavigation;