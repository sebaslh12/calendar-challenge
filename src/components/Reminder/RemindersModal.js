import React, { useState } from 'react';
import Modal from '../Modal';
import Reminder from '.';

const RemindersModal = ({ isOpen, onClose, reminders }) => {

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<div className="reminders-modal">
				{reminders.map((reminder, index) => <Reminder key={index} reminder={reminder} />)}
			</div>
		</Modal>
	);
}

export default RemindersModal;
