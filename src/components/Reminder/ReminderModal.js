import React, { useState } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import InputColor from 'react-input-color';
import { v4 as uuidv4 } from 'uuid';
import { addReminder, updateReminder, deleteReminder } from '../../store/actions/reminders';
import { forecast } from '../../Utils';
import dayjs from 'dayjs';

export const ReminderModal = ({ isOpen, onClose, dayData, reminder, addReminder, updateReminder, deleteReminder }) => {
	const [color, setColor] = useState({});
	const [values, setValues] = useState({
		id: reminder ? reminder.id : uuidv4(),
		name: reminder ? reminder.name : '',
		city: reminder ? reminder.city : '',
		time: reminder ? reminder.time : '',
		date: reminder ? reminder.date : dayData.date(),
		month: reminder ? reminder.month : dayData.month(),
		color: reminder ? reminder.color : '#5e72e4'
	});
	const [status, setStatus] = useState({ error: '', loading: false });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleDelete = (e) => {
		e.preventDefault();
		e.stopPropagation();
		const hasConfirm = window.confirm("This action cannot be undone");
		if (hasConfirm) return deleteReminder(reminder);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		e.stopPropagation();
		let weather;
		if (values.name.length > 30) return setStatus({ ...status, error: 'Name too long' });
		setStatus({ error: '', loading: true });
		if (reminder && reminder.id) {
			weather = reminder.city === values.city ? reminder.weather : await forecast(values.city, dayjs().month(reminder.month).date(reminder.date));
			updateReminder({ ...values, color: color.hex, weather })
		} else {
			weather = await forecast(values.city, dayData);
			addReminder({ ...values, color: color.hex, weather });
		}
		return onClose();
	}

	const modalAction = `${reminder ? 'Update' : 'Create'}`;

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
				<h3>{modalAction} Reminder</h3>
				<label>
					Name
					<input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Reminder Name" id="name" required />
				</label>
				<label>
					City
					<select name="city" onChange={handleChange} id="city" required value={values.city}>
						<option value="" defaultValue>Select a city</option>
						<option value="4.707823,74.080350">Bogotá</option>
						<option value="3.418170,-76.523839">Cali</option>
						<option value="40.795932,-73.967741">New York</option>
						<option value="34.170815,-118.259475">Los Angeles</option>
						<option value="32.795819,-86.584065">Montgomery</option>
						<option value="39.691622,-3.554066">Madrid</option>
						<option value="48.956818,2.256605">Paris</option>
						<option value="48.339104,11.445332">Munich</option>
						<option value="41.940657,12.971615">Roma</option>
					</select>
				</label>
				<label>
					Hour
					<input type="time" name="time" id="time" value={values.time} onChange={handleChange} placeholder="Hour" required />
				</label>
				<label>
					Color:
					<InputColor
						initialValue={values.color}
						placement="right"
						onChange={setColor}
					/>
				</label>
				{status.error && <p className="error">{status.error}</p>}
				<button type="submit" disabled={status.loading}>{modalAction}</button>
				{reminder && <button type="button" onClick={handleDelete}>Delete</button>}
			</form>
		</Modal>
	);
}

const mapDispatchToProps = dispatch => ({
	addReminder: reminder => dispatch(addReminder(reminder)),
	updateReminder: reminder => dispatch(updateReminder(reminder)),
	deleteReminder: reminder => dispatch(deleteReminder(reminder))
});

export default connect(null, mapDispatchToProps)(ReminderModal);