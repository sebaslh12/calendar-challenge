import React, { useState } from 'react';
import dayjs from 'dayjs';
import Month from './Month';
import './styles.css';

const Calendar = () => {
	// This will update the view if the month changes
	const date = new dayjs();
	const [monthData, setMonthData] = useState({
		currentMonth: date.month(),
		currentYear: date.year,
		startingDayOfWeek: date.startOf('month').day(),
		daysOfMonth: date.endOf('month').date()
	});

	return (
		<Month month={monthData} />
	);
}

export default Calendar;