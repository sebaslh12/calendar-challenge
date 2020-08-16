import { ADD_REMINDER, UPDATE_REMINDER, DELETE_REMINDER, DELETE_DAY_REMINDERS } from '../../Utils';

export const addReminder = payload => ({
	type: ADD_REMINDER,
	payload
});

export const updateReminder = payload => ({
	type: UPDATE_REMINDER,
	payload
});

export const deleteReminder = payload => ({
	type: DELETE_REMINDER,
	payload
});

export const deleteDayReminders = payload => ({
	type: DELETE_DAY_REMINDERS,
	payload
});