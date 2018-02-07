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

console.log(path.resolve(__dirname, 'build'));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/surf', (req, res) => {
	// using the mission beach buoy

	request('http://www.ndbc.noaa.gov/data/realtime2/46258.txt', function (error, response, body) {
			console.log('error:', error); // Print the error if one occurred and handle it
			console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
			res.send(body)
	});
});

// api route
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'build/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
