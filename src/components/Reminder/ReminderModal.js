import React, { useState } from 'react';
import Modal from '../Modal';
import { addReminder } from '../../store/actions/reminders';
import { connect } from 'react-redux';
import InputColor from 'react-input-color';

const ReminderModal = ({ isOpen, onClose, addReminder, dayData }) => {
	const [color, setColor] = useState({});
	const [values, setValues] = useState({
		name: '',
		city: '',
		time: '',
		date: dayData.date(),
		month: dayData.month()
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		e.stopPropagation();
		addReminder({ ...values, color: color.hex });
		onClose();
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
				<h4>Create Reminder</h4>
				<label>
					Name
					<input type="text" name="name" value={values.title} onChange={handleChange} placeholder="Reminder Name" maxLength="30" required />
				</label>
				<label>
					City
					<input type="text" name="city" value={values.title} onChange={handleChange} placeholder="Reminder city" required />
				</label>
				<label>
					Hour
					<input type="time" name="time" value={values.title} onChange={handleChange} placeholder="Hour" required />
				</label>
				<label>
					Color:
					<InputColor
						initialValue="#5e72e4"
						placement="right"
						onChange={setColor}
					/>
				</label>
				<button type="submit">Save</button>
			</form>
		</Modal>
	);
}

const mapDispatchToProps = dispatch => ({
	addReminder: reminder => dispatch(addReminder(reminder))
});

export default connect(null, mapDispatchToProps)(ReminderModal);