import React, { Component } from 'react';
import './App.css';
import convertTime from './helpers/convertTime.js';
import getTodaysDate from './helpers/getTodaysDate.js';
import getDayOfWeek from './helpers/getDayOfWeek.js';
import Loader from './components/loader/loader.js';
import Swell from './components/swell/swell.js';
import Wind from './components/wind/wind.js';
import Weather from './components/weather/weather.js';

const API_KEY = '16ac7780087c57a0f2ee4504a3898e42';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

class App extends Component {
	state = {
		swellData: '',
		forecastWeather: '',
		currentWeather: '',
	};

	fetchWeather = async() => {
		const url = `${ROOT_URL}&zip=92109,us&units=imperial`;
		const data = await fetch(`${url}`);
		let body = await data.json();
		console.log(body);

		return body;
	}

	fetchCurrentWeather = async() => {
		const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&zip=92109,us&units=imperial`);
		let body = await data.json();
		console.log(body);

		return body;
	}

	async componentDidMount() {
		const res = await this.callSwellApi()
		const res2 = await this.fetchWeather()
		const res3 = await this.fetchCurrentWeather()

		console.log('one', res, 'two', res2, 'three', res3);

		this.setState({
			swellData: res,
			forecastWeather: res2,
			currentWeather: res3
		})
	}

	callSwellApi = async() => {
		const data = await fetch('/api/surf');
		let body = await data.text();

		body = body.split(/\s+/);
		const headers = body.splice(0,19);
		const units = body.splice(0,19);
		const currentData = body.splice(0,19);

		let result = {};
		headers.forEach((key, i) => {
			result[key] = {
				value: currentData[i],
				unit: units[i]
			};
		});

		console.log(result);

		if (data.status !== 200) throw Error(body.message);
		return result;
	}

	render() {

		if (!this.state.swellData || !this.state.forecastWeather || !this.state.currentWeather) {
			return <Loader />;
		}

		const forecast = this.state.forecastWeather;
		const current = this.state.currentWeather;
		const swell = this.state.swellData;

		return (
			<div className="App">
				<header className="title-bar">
					<span className="title-bar__overview">Pacific Beach Surf Report - {getTodaysDate()}</span>
				</header>
				<main>
					<Swell swellData={swell} />
					<Wind windData={current.wind} />
					<Weather weatherData={current} waterTemp={swell.WTMP.value} title={getDayOfWeek(0)} />
					<Weather weatherData={forecast.list[0]} title={getDayOfWeek(1)}/>
					<Weather weatherData={forecast.list[1]} title={getDayOfWeek(2)}/>
					<Weather weatherData={forecast.list[2]} title={getDayOfWeek(3)}/>
				</main>
			</div>
		);
	}
}

export default App;
