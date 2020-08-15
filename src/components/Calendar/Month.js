import React from 'react';
import dayjs from 'dayjs';

const daysOfPastMonth = (dayOfWeek, startingDay) => {
	const weekBefore = [];
	for (let daysBefore = 0; daysBefore < dayOfWeek; daysBefore++) {
		const dayOfPreviousMonth = dayjs(startingDay).day(dayOfWeek).subtract(dayOfWeek - daysBefore, 'day');
		weekBefore.push(dayOfPreviousMonth.date());
	}
	return weekBefore;
}

const daysOfNextMonth = (finalDay) => {
	const finalDayOfWeek = finalDay.day();
	const weekAfter = [];
	for (let daysAfter = finalDayOfWeek; daysAfter < 6; daysAfter++) {
		const dayOfNextMonth = dayjs(finalDay).add(daysAfter, 'day');
		weekAfter.push(dayOfNextMonth.date());
	}
	return weekAfter
}

const daysOfCurrentMonth = (daysOfMonth, currentMonth) => {
	const month = []
	for (let day = 1; day <= daysOfMonth; day++) {
		//const currentDay = dayjs().month(currentMonth).date(day);
		month.push(day)
	}
	return month;
}

const Month = ({ month }) => {
	const startingDay = dayjs().month(month.currentMonth).date(1);
	const pastMonth = daysOfPastMonth(month.startingDayOfWeek, startingDay)
	const currentMonth = daysOfCurrentMonth(month.daysOfMonth);
	const nextMonth = daysOfNextMonth(dayjs().month(month.currentMonth).date(month.daysOfMonth));
	const renderDays = [...pastMonth, ...currentMonth, ...nextMonth];

	return (
		<div>
			<h1>Month</h1>
			{renderDays.map((day, index) => <span key={index}> {day} </span>)}
		</div>
	);
}

export default Month;