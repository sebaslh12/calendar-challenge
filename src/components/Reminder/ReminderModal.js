import React, { useState } from 'react';
import Modal from '../Modal';

const ReminderModal = ({ isOpen, onClose }) => {
	const [values, setValues] = useState({
		name: '',
		city: '',
		time: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		e.stopPropagation();
		onClose();
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<form onSubmit={handleSubmit} onClick={(e)=>e.stopPropagation()}>
				<h4>Create Reminder</h4>
				<label>
					Name
					<input type="text" name="name" value={values.title} onChange={handleChange} placeholder="Reminder Name" required/>
				</label>
				<label>
					City
					<input type="text" name="city" value={values.title} onChange={handleChange} placeholder="Reminder city" required/>
				</label>
				<label>
					Hour
					<input type="time" name="time" value={values.title} onChange={handleChange} placeholder="Hour" required/>
				</label>
				<button type="submit">Save</button>
			</form>
		</Modal>
	);
}

export default ReminderModal;