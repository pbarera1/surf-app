const getDayOfWeek = (daysInFuture) => {
	const today = new Date().getDay();
	let day = today + daysInFuture;

	switch (day) {
		case 1:
		day = "Monday";
		break;
		case 2:
		day = "Tuesday";
		break;
		case 3:
		day = "Wednesday";
		break;
		case 4:
		day = "Thursday";
		break;
		case 5:
		day = "Friday";
		break;
		case 6:
		day = "Saturday";
		break;
		case 7:
		day = "Sunday";
		break;
		case 8:
		day = "Monday";
		break;
		case 9:
		day = "Tuesday";
		break;
		case 10:
		day = "Wenesday";
		break;
	}
	if (!daysInFuture) {
		return 'Today';
	} else {
		return day;
	}
}

export default getDayOfWeek;
