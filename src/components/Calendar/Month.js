import React from 'react';
import dayjs from 'dayjs';
import Day from './Day';
import { days, daysOfCurrentMonth, daysOfNextMonth, daysOfPastMonth } from '../../Utils';

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
);
