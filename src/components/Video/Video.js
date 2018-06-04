import React from 'react';
import styles from './styles.css';
import layout from '../../styles/layout.css';
import thumbnail from '../../images/stockimage.png';
import playBtn from '../../images/playbtn.png';

const Video = ({ description, thumbnail_large, title, url, }) => {
	return (
		<figure className={styles.video}>
			<div className={layout.row}>
				<div className={styles.columnDescription}>	
					<h2>{title}</h2>
					<p dangerouslySetInnerHTML={{ __html: description }} />
				</div>
				<div className={styles.columnVideo}>
					<a href={url} className={styles.player}>
						<img className={styles.thumbnail} src={thumbnail_large} alt={title} />
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
		</figure>
	);
}

export default Video;