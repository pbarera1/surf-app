import React, { Component } from 'react';
import './swell.css';

const Swell = (props) => {

	if (!props.swellData) {
		return;
	}

	const swellData = props.swellData;
	const swellHeight = (swellData.WVHT.value * 3.28084).toFixed(2);
	const swellDesc = (swellPeriod) => {
		if (swellPeriod <= 5) {
			return 'Local Wind Swells, Bumpy Discorder Waves, Poor Surf';
		} else if (swellPeriod <= 8) {
			return 'Regional and Local Wind Swells, avergae conditions. Offshore winds might help improve';
		} else if (swellPeriod <= 10) {
			return 'Medium distance swells, good conditions';
		} else if (swellPeriod <= 12) {
			return 'Groundswells in effect, great conditions';
		} else {
			return 'Long period swell, high quality waves!';
		}
	}

	const waveCss = {}

	const waveHeight = (swellSize) => {
		if (swellSize <= 2) {
			waveCss.flexBasis = '20%';
			return '1-2 ft. Ankle to Knee High Surf';
		} else if (swellSize <= 3) {
			waveCss.flexBasis = '40%';
			return '2-3 ft Knee to Waist High Surf';
		} else if (swellSize <= 4) {
			waveCss.flexBasis = '60%';
			return '3-4 ft Waist to Shoulder High';
		} else if (swellSize <= 6) {
			waveCss.flexBasis = '80%';
			return '4-6 ft Shoulder to Head High';
		} else {
			waveCss.flexBasis = '100%';
			return '6ft+ Overhead Surf!!!';
		}
	}
	waveHeight(swellHeight);

	return (
		<div className="swell">
			<div className="swell__visual">
				<div className="swell__wave-height" style={waveCss}>
				</div>
			</div>
			<div className="swell__desc">
				<div className="swell__title">
					Wave Range:
					<div className="swell__text">
						{waveHeight(swellHeight)}
					</div>
				</div>
				<div className="swell__title">
					Swell Height:
					<div className="swell__text swell__text--large">
						{swellHeight}ft
					</div>
				</div>
				<div className="swell__title">
					Swell Period:
					<div className="swell__text">
						{swellData.APD.value} {swellData.APD.unit}
					</div>
				</div>
				<div className="swell__title">
					Swell Period Desc:
					<div className="swell__text">
						{swellDesc(swellData.APD.value)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Swell;
