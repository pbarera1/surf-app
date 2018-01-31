import React, { Component } from 'react';
import './sun.css';
import convertTime from '../../helpers/convertTime.js';

const Sun = (props) => {

	if (!props.sunData.sunrise && !props.sunData.sunset) {
		return null;
	}

	const sun = props.sunData;

	return (
		<div className="sun">
			<div className="sun__rise">
				Sunsrise: {convertTime(sun.sunrise)}
			</div>
			<div className="sun__set">
				Sunset: {convertTime(sun.sunset)}
			</div>
		</div>
	);
}

export default Sun;
