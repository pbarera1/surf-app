import React, { Component } from 'react';
import './weather.css';
import celToFar from '../../helpers/celToFar.js';
import Sun from '../sun/sun.js';

const Weather = (props) => {

	if (!props.weatherData) {
		return;
	}

	const weatherDesc = {
		'clear sky': 'clear.png',
		'few clouds': 'mostly-sunny.png',
		'scattered clouds': 'partly-cloudy.png',
		'broken clouds': 'cloudy.png',
		'shower rain': 'light-rain.png',
		'rain': 'rain.png',
		'thunderstorm': 'thunderstorm.png',
		'mist': 'mist.png',
	};
	const current = props.weatherData;
	const waterTemp = props.waterTemp;
	let weatherImg = '';

	Object.keys(weatherDesc).forEach(function(key, index) {
		if (key == current.weather[0].description) {
			weatherImg = weatherDesc[key];
		}
	});

	return (
		<div className="weather">
			<div className="weather__title">
				{props.title}
			</div>
			<div className="weather__temp">
				<span className="weather__air">
					Air: {Math.round(current.main.temp)}°F
				</span>
				<span className="weather__water">
					{waterTemp ? `Water: ${celToFar(waterTemp)}°F` : ''}
				</span>
			</div>
			<img src={`${process.env.PUBLIC_URL}/images/${weatherImg}`} className="weather__img" alt=""/>
			<div className="weather__desc">
				{current.weather[0].description}
			</div>
			<div className="weather__misc">
				{props.title !== 'Today' ? `Wind: ${current.wind.speed} mph` : ''}
				<Sun sunData={current.sys} />
			</div>
		</div>
	);
}

export default Weather;
