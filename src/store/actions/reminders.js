import { ADD_REMINDER, UPDATE_REMINDER } from '../../Utils';

export const addReminder = payload => ({
	type: ADD_REMINDER,
	payload
});

export const updateReminder = payload => ({
	type: UPDATE_REMINDER,
	payload
});
