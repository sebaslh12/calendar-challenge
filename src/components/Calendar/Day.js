import React, { useState } from 'react';
import ReminderModal from '../Reminder/ReminderModal';
import { connect } from 'react-redux';
import Reminder from '../Reminder';
import dayjs from 'dayjs';
import RemindersModal from '../Reminder/RemindersModal';

const Day = ({ dayData, currentMonth, reminders }) => {
	const remindersOfThisDay = reminders.filter(reminder => reminder.date === dayData.date() && reminder.month === dayData.month());
	const isActive = (dayData.month() === currentMonth) && (dayData.date() >= dayjs().date());
	const [showModal, setShowModal] = useState(false);
	const [showRemindersModal, setShowRemindersModal] = useState(false);
	const toggleModal = () => { if (isActive) setShowModal(!showModal) };
	const toggleRemindersModal = () => { if (isActive) setShowRemindersModal(!showRemindersModal) };

	return (
		<div className={`day${!isActive ? ' disabled' : ''}`} onClick={toggleModal}>
			<h3>{dayData.date()}</h3>
			<div className="reminders-container">
				{remindersOfThisDay.slice(0, 2).map((reminder, index) => <Reminder key={index} reminder={reminder} />)}
				{remindersOfThisDay.length > 2 &&
					<div className="reminder" style={{ backgroundColor: '#a09d9d' }} onClick={toggleRemindersModal}>
						Show More
					</div>}
			</div>
			{showModal && <ReminderModal isOpen={showModal} onClose={toggleModal} dayData={dayData} />}
			{showModal && <RemindersModal isOpen={showRemindersModal} onClose={toggleRemindersModal} reminders={reminders} />}
		</div>
	);
}
const mapStateToProps = state => ({
	reminders: state.reminders,
});

export default connect(mapStateToProps)(Day);