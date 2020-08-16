import React from 'react';
import Modal from '../Modal';
import Reminder from '.';
import { reminderSorter } from '../../Utils';

const RemindersModal = ({ isOpen, onClose, reminders }) => {

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="reminders-modal">
				{reminderSorter(reminders).map((reminder, index) => <Reminder key={index} reminder={reminder} />)}
			</div>
		</Modal>
	);
}

export default RemindersModal;
