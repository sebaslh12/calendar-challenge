import React from 'react';

const Reminder = ({ reminder }) => {
	return (
		<div className="reminder" style={{ backgroundColor: reminder.color }}>
			<p className="reminder__data">
				<span>{reminder.time} </span>
				<span className="reminder__data__name">{reminder.name} </span>
				<span>{reminder.weather}</span>
			</p>
		</div>
	);
}

export default Reminder;