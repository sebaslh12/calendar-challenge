import React, { useState } from 'react';
import ReminderModal from '../Reminder/ReminderModal';
import { connect } from 'react-redux';
import dayjs from 'dayjs';
import Reminder from '../Reminder';
import RemindersModal from '../Reminder/RemindersModal';
import { reminderSorter, getRemindersOfTheDay } from '../../Utils';

const Day = ({ dayData, reminders }) => {
	const remindersOfThisDay = reminderSorter(getRemindersOfTheDay(dayData, reminders));
	const isActive = (dayData.unix() >= dayjs().unix());
	const [showModal, setShowModal] = useState(false);
	const [showRemindersModal, setShowRemindersModal] = useState(false);
	const toggleModal = () => setShowModal(!showModal);
	const toggleRemindersModal = () => setShowRemindersModal(!showRemindersModal);

	return (
		<div className={`day${!isActive ? ' disabled' : ''}`}>
			<h3>{dayData.date()}</h3>
			<h3 className="day__add" onClick={toggleModal}>+</h3>
			<div className="reminders-container">
				{remindersOfThisDay.slice(0, 2).map((reminder, index) => <Reminder key={index} reminder={reminder} />)}
				{remindersOfThisDay.length > 2 &&
					<div className="reminder" style={{ backgroundColor: '#a09d9d' }} onClick={toggleRemindersModal}>
						Show More
					</div>}
			</div>
			{showModal && <ReminderModal isOpen={showModal} onClose={toggleModal} dayData={dayData} />}
			{showRemindersModal && <RemindersModal isOpen={showRemindersModal} onClose={toggleRemindersModal} reminders={remindersOfThisDay} day={dayData}/>}
		</div>
	);
}
const mapStateToProps = state => ({
	reminders: state.reminders,
});

export default connect(mapStateToProps)(Day);