import dayjs from "dayjs";

export const ADD_REMINDER = 'ADD_REMINDER';
export const UPDATE_REMINDER = 'UPDATE_REMINDER';
export const SELECT_REMINDER = 'SELECT_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';

export const months = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

export const days = [
	'Sun',
	'Mon',
	'Tue',
	'Wed',
	'Thu',
	'Fri',
	'Sat'
];

export const getRemindersOfTheDay = (day, reminders) => reminders.filter(reminder => reminder.date === day.date() && reminder.month === day.month());

export const reminderSorter = (reminders) => reminders.sort((a, b) => {
	const aTime = parseInt(a.time.replace(":", ""));
	const bTime = parseInt(b.time.replace(":", ""));
	return aTime - bTime;
});

export const forecast = async (coordinates, dayData) => {
	const today = dayjs();
	const latitude = coordinates.split(",")[0];
	const longitude = coordinates.split(",")[1];
	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,hourly,minutely&appid=a0fc5ad2a88fefb0be74a6574623c0f4`;

	if (today.month() !== dayData.month() || dayData.date() - today.date() > 7) return "Unavailable";

	const response = await fetch(url, {});
	if (response.status === 200) {
		const data = await response.json()
		const forecastForDate = getDayForecast(data.daily, dayData);
		if (forecastForDate) return forecastForDate.weather[0].main;
	}
	return "Unavailable";
}

const getDayForecast = (forecasts, dayData) => {
	for (let index = 0; index < forecasts.length; index++) {
		const forecastDate = dayjs(new Date(forecasts[index].dt * 1000))
		if (forecastDate.date() === dayData.date()) {
			return forecasts[index];
		}
	}
	return null;
}