import React from 'react';

const Reminder = ({ reminder }) => {
	return (
		<div>
			<p>{reminder.name}</p>
			<p>{reminder.time}</p>
		</div>
	);
}

export default Reminder;