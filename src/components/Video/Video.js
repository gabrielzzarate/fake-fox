import React from 'react';
import styles from './styles.css';
import layout from '../../styles/layout.css';
import thumbnail from '../../images/stockimage.png';
import playBtn from '../../images/playbtn.png';

const Video = () => {
	return (
		<div className={layout.row}>
			<div className={styles.columnDescription}>	
				<h2>Video Title (from videos.json)</h2>
				<p>Video Description (from videos.json)</p>
			</div>
			<div className={styles.columnVideo}>
				<a className={styles.player}>
					<img className={styles.thumbnail} src={thumbnail} alt="Video Thumbnail" />
					<div className={styles.playBtnOuter}>
						<div className={styles.playBtnInner}>
							<div className={styles.playBtn}>
								<img src={playBtn} alt="Icon: Play" />
								<span> Watch Video </span>
							</div>
						</div>
					</div>
				</a> 
			</div>
		</div>
	);
}

export default Video;