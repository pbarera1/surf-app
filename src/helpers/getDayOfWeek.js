const getDayOfWeek = (daysInFuture) => {
	if (!daysInFuture) return 'Today';

	const today = new Date().getDay();
	let day = today + daysInFuture -1;

	const daysOfWeek = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday'
	];

	const remainder = day % daysOfWeek.length;
	return daysOfWeek[remainder];
}

export default getDayOfWeek;
