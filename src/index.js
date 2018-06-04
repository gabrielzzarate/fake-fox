import React from 'react';
import { render } from 'react-dom';
import styles from './styles/global.css';
import heroImage from './images/hero-image.png';

import Header from './components/Header/Header';
import Masthead from './components/Masthead/Masthead';
import ValuePropSection from './containers/ValuePropSection';
import Callout from './components/Callout/Callout';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<div className={styles.global}>
			<Header />
			<Masthead />
			<ValuePropSection />
			<Callout />
			<Footer />
		</div>
	);
};

render(<App />, document.getElementById('app'));
