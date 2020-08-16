import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import Reminder from '.';
import { reminderSorter, months } from '../../Utils';
import { deleteDayReminders } from '../../store/actions/reminders';

const RemindersModal = ({ isOpen, onClose, reminders, day, deleteDayReminders }) => {

	const handleClick = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const hasConfirm = window.confirm("This action cannot be undone");
		if (hasConfirm) {
			deleteDayReminders({ date: day.date(), month: day.month() });
			onClose();
		}
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="reminders-modal">
				<h2>Reminders for {`${day.date()} of ${months[day.month()]}`}</h2>
				{reminderSorter(reminders).map((reminder, index) => <Reminder key={index} reminder={reminder} />)}
				<button type="submit" onClick={handleClick}>Delete All reminders</button>
			</div>
		</Modal>
	);
}

const mapDispatchToProps = dispatch => ({
	deleteDayReminders: dayData => dispatch(deleteDayReminders(dayData))
});

export default connect(null, mapDispatchToProps)(RemindersModal);
