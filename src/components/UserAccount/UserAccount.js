import React from 'react';
import styles from './styles.css';
import user from '../../images/daniel-seripap.jpg';


const UserAccount = () => {
	return (
		<a className={styles.userAccount}>
			<img src={user} alt="User Name" />
		</a>
	);
}

export default UserAccount;