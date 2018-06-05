import React from 'react';
import styles from './styles.css';
import layout from '../../styles/layout.css';

import Button from '../Button/Button';

const Masthead = () => {
	return (
		<section className={styles.masthead}>
			<div className={styles.container}>
				<div className={styles.row}>
					<div className={styles.mastheadContent}>
						<h1>The world's greatest fake site</h1>
						<p>Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it</p>
						<Button>Do Something Awesome</Button>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Masthead;