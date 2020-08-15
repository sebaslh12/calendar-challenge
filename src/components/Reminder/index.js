import React from 'react';

const Reminder = ({ reminder }) => {
	return (
		<div>
			<p>{reminder.name}</p>
			<p>{reminder.time}</p>
			<p>{reminder.color}</p>
		</div>
	);
}

export default Reminder;