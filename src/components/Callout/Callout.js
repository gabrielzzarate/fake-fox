import React from 'react';
import layout from '../../styles/layout.css';

const Callout = () => {
	return (
		<section>
			<div className={layout.containerCentered}>
				<h2>Ready to have your cake and eat it too?</h2>
				<p>Start by designing the experience you have in mind. We'll guide you through each step. If your experience meets the quality standards, you'll hear more about what's next.</p>
			</div>
		</section>
	);
}

export default Callout;