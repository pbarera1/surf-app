const express = require('express');
const request = require('request');
// const puppeteer = require('puppeteer');

const app = express();
const port = process.env.PORT || 5000;

// enable cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/surf', (req, res) => {
	// using the mission beach buoy
	request('http://www.ndbc.noaa.gov/data/realtime2/46258.txt', function (error, response, body) {
			console.log('error:', error); // Print the error if one occurred and handle it
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			res.send(body)
	});
});

app.get('/advisory', (req, res) => {
	// is the water safe?

});

//puppeteer
// async function run() {
// 	const browser = await puppeteer.launch();
// 	const page = await browser.newPage();

// 	await page.goto('http://www.sdbeachinfo.com/');
// 	await page.waitFor(2*1000);

// 	const text = page.evaluate(() => document.querySelector('.footer-bottom-link').textContent);
// 	console.log(text);
// }
// run();


//cheerio
// app.get('/advisory', (req, res) => {
// 	// is the water safe?
// 	request('http://www.sdcoastkeeper.org/learn/swimmable/san-diego-water-quality/beach-advisories', function (error, response, body) {
// 			console.log('error:', error); // Print the error if one occurred and handle it
// 			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

// 			const $ = cheerio.load(body);
// 			const advisories = $('.entry');
// 			console.log(advisories);
// 			const isAdvisory = {};
// 			advisories.each(function(index, elem) {
// 				let beachName = elem.text().split('<br/>')[0].toLowerCase();
// 				if(beachName.includes('ocean beach') || beachName.includes('la jolla') || beachName.includes('mission beach')) {
// 					alert = $('#advisory-view ul li p a:last-child').text();
// 					isAdvisory[beachName] = alert;
// 				}
// 			});
// 			res.send(isAdvisory)
// 	});
// });

// api route
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
