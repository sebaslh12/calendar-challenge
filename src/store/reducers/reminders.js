import { ADD_REMINDER, UPDATE_REMINDER, DELETE_REMINDER } from '../../Utils';

// Get from localstorage, if first time then there are no reminders
const initialState = [];

export const reminders = (state = initialState, action) => {
	switch (action.type) {
		case ADD_REMINDER:
			return [...state, action.payload];
		case DELETE_REMINDER:
			return state.filter(reminder => reminder.id !== action.payload.id);
		case UPDATE_REMINDER:
			const reminderIndex = state.findIndex(reminder => reminder.id === action.payload.id);
			const newState = state.slice()
			newState.splice(reminderIndex, 1);
			return [...newState, action.payload];
		default:
			return state;
	}
};
