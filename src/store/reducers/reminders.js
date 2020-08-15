import { ADD_REMINDER, UPDATE_REMINDER, DELETE_REMINDER } from '../../constants';

// Get from localstorage, if first time then there are no reminders
const initialState = localStorage.getItem('reminders') ? localStorage.getItem('reminders') : [{ name: "I'm from state" }];

export const reminders = (state = initialState, action) => {
	switch (action.type) {
		case ADD_REMINDER:
			return [...state, action.payload];
		case DELETE_REMINDER:
			return state.filter(REMINDER => REMINDER.id !== action.payload.id);
		case UPDATE_REMINDER:
			const reminderIndex = state.findIndex(reminder => reminder.id === action.payload.id);
			const newState = state.slice(reminderIndex);
			return [...newState, action.payload];
		default:
			return state;
	}
};
