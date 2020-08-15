import React from 'react';

const Day = ({ dayData, currentMonth }) => {
	const isActive = dayData.month() === currentMonth;
	const handleClick = (e)=>{
		e.preventDefault();
		e.stopPropagation();
		if(isActive) {
			console.log('Event creation')
		}
	}
	return (
		<div className={`day${!isActive ? ' disabled' : ''}`} onClick={handleClick}>
			<h3>{dayData.date()}</h3>
		</div>
	);
}

export default Day;