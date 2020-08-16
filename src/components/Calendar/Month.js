import React from 'react';
import dayjs from 'dayjs';
import Day from './Day';
import { days } from '../../Utils';

const daysOfPastMonth = (dayOfWeek, startingDay) => {
	const weekBefore = [];
	for (let daysBefore = 0; daysBefore < dayOfWeek; daysBefore++) {
		const dayOfPreviousMonth = dayjs(startingDay).day(dayOfWeek).subtract(dayOfWeek - daysBefore, 'day');
		weekBefore.push(dayOfPreviousMonth);
	}
	return weekBefore;
}

const daysOfNextMonth = (finalDay) => {
	const finalDayOfWeek = finalDay.day();
	const weekAfter = [];
	for (let daysAfter = 1; daysAfter < 7 - finalDayOfWeek; daysAfter++) {
		const dayOfNextMonth = dayjs(finalDay).add(daysAfter, 'day');
		weekAfter.push(dayOfNextMonth);
	}
	return weekAfter;
}

const daysOfCurrentMonth = (daysOfMonth, currentMonth) => {
	const month = [];
	for (let day = 1; day <= daysOfMonth; day++) {
		const currentDay = dayjs().month(currentMonth).date(day);
		month.push(currentDay);
	}
	return month;
}

const Month = ({ month }) => {
	const startingDay = dayjs().month(month.currentMonth).date(1);
	const pastMonth = daysOfPastMonth(month.startingDayOfWeek, startingDay)
	const currentMonth = daysOfCurrentMonth(month.daysOfMonth, month.currentMonth);
	const nextMonth = daysOfNextMonth(dayjs().month(month.currentMonth).date(month.daysOfMonth));
	const renderDays = [...pastMonth, ...currentMonth, ...nextMonth];

	return (
		<div className="month">
			<div className="days-container">
				{days.map((day, index) => <DayItem day={day} key={index} />)}
			</div>
			<div className="days-container">
				{renderDays.map((day, index) => <Day key={index} dayData={day} />)}
			</div>
		</div>
	);
}

export default Month;

const DayItem = ({ day }) => (
	<div className="day day__col">
		<h2>{day}</h2>
	</div>
)
