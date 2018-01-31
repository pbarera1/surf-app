import React from 'react';
import './loader.css';

const Loader = () => {
	return (
		// credit to Ted McDonald for wave animation https://codepen.io/tedmcdo/pen/PqxKXg
		<div className="c-wave-loader">

			<div className="c-wave-loader__ocean">

				<div className="c-wave-loader__text">Loading</div>
				<div className="c-wave-loader__wave"></div>
				<div className="c-wave-loader__wave"></div>

			</div>

		</div>
	)
}

export default Loader;
