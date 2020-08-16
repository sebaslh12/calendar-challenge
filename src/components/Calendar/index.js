import React, { useState } from 'react';
import dayjs from 'dayjs';
import Month from './Month';
import { months } from '../../Utils';
import './styles.css';

const Calendar = () => {
	// This will update the view if the month changes
	const [date, setDate] = useState(dayjs());
	const [monthData, setMonthData] = useState({
		currentMonth: date.month(),
		currentYear: date.year,
		startingDayOfWeek: date.startOf('month').day(),
		daysOfMonth: date.endOf('month').date()
	});
	const handleClick = (e, value) => {
		e.preventDefault();
		e.stopPropagation();
		const newDate = date.add(value, 'month').date(1).year(2020);
		setDate(newDate);
		setMonthData({
			currentMonth: newDate.month(),
			currentYear: newDate.year,
			startingDayOfWeek: newDate.startOf('month').day(),
			daysOfMonth: newDate.endOf('month').date()
		});
	}

	return (
		<div className="calendar">
			<header>
				<span className="calendar__button" onClick={(e) => handleClick(e, -1)}>{'<'}</span>
				<h1 className="calendar__title">{months[monthData.currentMonth]}</h1>
				<span className="calendar__button" onClick={(e) => handleClick(e, 1)}>{'>'}</span>
			</header>
			<Month month={monthData} />
		</div>
	);
}

export default Calendar;