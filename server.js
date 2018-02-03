const express = require('express');
const request = require('request');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001;

// enable cors
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, 'build')));

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

// api route
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/*', (req, res) => {
	console.log('got');
	res.sendFile(path.join(__dirname, 'build/index.html'));
})

app.listen(port, () => console.log(`Listening on port ${port}`));
