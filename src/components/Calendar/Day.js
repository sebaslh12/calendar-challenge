import React, { useState } from 'react';
import ReminderModal from '../Reminder/ReminderModal';

const Day = ({ dayData, currentMonth }) => {
	const isActive = dayData.month() === currentMonth;
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => { if (isActive) setShowModal(!showModal) };

	return (
		<div className={`day${!isActive ? ' disabled' : ''}`} onClick={toggleModal}>
			<h3>{dayData.date()}</h3>
			{showModal && <ReminderModal isOpen={showModal} onClose={toggleModal} />}
		</div>
	);
}

export default Day;