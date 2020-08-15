import React, { useState } from 'react';
import ReminderModal from '../Reminder/ReminderModal';
import { connect } from 'react-redux';
import Reminder from '../Reminder';
import dayjs from 'dayjs';

const Day = ({ dayData, currentMonth, reminders }) => {
	const remindersOfThisDay = reminders.filter(reminder => reminder.date === dayData.date() && reminder.month === dayData.month());
	const isActive = (dayData.month() === currentMonth) && (dayData.date() >= dayjs().date());
	const [showModal, setShowModal] = useState(false);
	const toggleModal = () => { if (isActive) setShowModal(!showModal) };

	return (
		<div className={`day${!isActive ? ' disabled' : ''}`} onClick={toggleModal}>
			<h3>{dayData.date()}</h3>
			{remindersOfThisDay.map((reminder, index) => <Reminder key={index} reminder={reminder} />)}
			{showModal && <ReminderModal isOpen={showModal} onClose={toggleModal} dayData={dayData} />}
		</div>
	);
}
const mapStateToProps = state => ({
	reminders: state.reminders,
});

export default connect(mapStateToProps)(Day);