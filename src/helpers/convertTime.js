export default function(unix_timestamp) {

	const date = new Date(unix_timestamp*1000);
	// Hours part from the timestamp
	const hours = date.getHours();
	// Minutes part from the timestamp
	const minutes = "0" + date.getMinutes();
	// Will display time in 10:30 format
	const formattedTime = hours + ':' + minutes.substr(-2);

	return formattedTime;
}
