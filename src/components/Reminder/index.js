import React, { useState } from 'react';
import ReminderModal from './ReminderModal';

const Reminder = ({ reminder }) => {
	const [showModal, setShowModal] = useState(false)
	const toggleModal = () => setShowModal(!showModal);

	return (
		<div className="reminder" style={{ backgroundColor: reminder.color }} onClick={toggleModal}>
			<p className="reminder__data">
				<span>{reminder.time} </span>
				<span className="reminder__data__name">{reminder.name} </span>
				<span>{reminder.weather}</span>
			</p>
			{showModal && <ReminderModal isOpen={showModal} onClose={toggleModal} reminder={reminder} />}
		</div>
	);
}

export default Reminder;