import React, { Component } from 'react';
import layout from '../styles/layout.css';

import Video from '../components/Video/Video';

class ValuePropSection extends Component {
	render() {
		return (
			<section>
				<div className={layout.container}>
					<Video />
				</div>
			</section>
		);
	}
}

export default ValuePropSection;
