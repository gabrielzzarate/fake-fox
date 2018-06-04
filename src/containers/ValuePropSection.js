import React, { Component } from 'react';
import layout from '../styles/layout.css';

import Video from '../components/Video/Video';

class ValuePropSection extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: null
		};
	}

	async componentDidMount() {
		const res = await fetch('https://vimeo.com/api/v2/channel/staffpicks/videos.json');
		const videos = await res.json();
		this.setState({ videos: videos });
	}

	renderVideos() {
		if(this.state.videos === null) {
			return;
		}

		const videos = this.state.videos.map(video => {
			return <Video key={video.id} {...video} />
		});

		return videos;
	}

	render() {
		console.log('state', this.state);
		return (
			<section>
				<div className={layout.container}>
					{
						this.renderVideos()
					}
				</div>
			</section>
		);
	}
}

export default ValuePropSection;
