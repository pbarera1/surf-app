import React, { Component } from 'react';
import './wind.css';

const Wind = (props) => {

	if (!props.windData) {
		return;
	}

	const windData = props.windData;
	const rotate = {
		transform: `rotateZ(${windData.deg}deg)`
	}

	const windDesc = (windSpeed, windDir) => {
		let speed = '';
		if (windSpeed >= 18) {
			speed = 'Heavy';
		} else if (windSpeed <= 11) {
			speed = 'Light';
		} else {
			speed = 'Moderate';
		}
		let direction = (windDir > 180) ? 'Offshore' : 'Onshore';
		return `${speed} ${direction}`;
	}

	const windStyle = {
		backgroundColor: ''
	}

	if (windData.speed <= 11) {
		windStyle.backgroundColor = 'rgba(0,178,0,.7)';
	} else if (windData.speed <= 17) {
		windStyle.backgroundColor = 'rgba(255,165,0,.7)';
	}
	else {
		windStyle.backgroundColor = 'rgba(255,0,0,.7)';
	}

	return (
		<div className="wind">
			<div className="wind__direction">
				<div className="wind__arrow" style={rotate}></div>
			</div>
			<div className="wind__desc">
				<div className="wind__desc-container" style={windStyle}>
					<div className="wind__text">
						{windDesc(windData.speed, windData.deg)}
					</div>
					<div className="wind__text">
						{windData.speed}mph at {windData.deg}&deg;
					</div>
				</div>
			</div>
		</div>
	);
}

export default Wind;
