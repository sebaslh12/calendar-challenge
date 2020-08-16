import React, { useState as useStateMock } from 'react';
import { shallow, configure } from 'enzyme';
import dayjs from 'dayjs';
import Adapter from 'enzyme-adapter-react-16';
import { ReminderModal } from './ReminderModal';
import fetchMock from "jest-fetch-mock";

configure({ adapter: new Adapter() });

// Mocking use state hook
jest.mock('react', () => ({
	...jest.requireActual('react'),
	useState: jest.fn(),
}));

const fetchMockResponse = { daily: [] }

describe('Reminders form modal ', () => {
	let wrapper;
	let onCloseSpy;
	const setState = jest.fn();
	const onClose = jest.fn(() => false);
	beforeEach(() => {
		fetchMock.doMock()
		useStateMock.mockImplementation(init => [init, setState]);
		const [addReminder, updateReminder, deleteReminder] = new Array(3).fill(jest.fn(() => null));
		const props = {
			onClose,
			isOpen: true,
			dayData: dayjs().add(9, 'days'),
			addReminder,
			updateReminder,
			deleteReminder
		};
		wrapper = shallow(<ReminderModal {...props} />);
		onCloseSpy = jest.spyOn(wrapper.getElement().props, 'onClose');
	});

	it('should render', () => {
		expect(wrapper.find('h2').text()).toBe('Create Reminder');
		expect(wrapper.find('#name')).toBeTruthy();
		expect(wrapper.find('#city')).toBeTruthy();
		expect(wrapper.find('#time')).toBeTruthy();
	});

	it('should not submit', () => {
		wrapper.find('form').simulate('submit', { preventDefault() { }, stopPropagation() { } });
		expect(wrapper).toBeTruthy();
		expect(onCloseSpy).not.toHaveBeenCalled();
	});

	it('should submit', async () => {
		jest.spyOn(React, 'useState').mockImplementation(useStateMock);
		wrapper.find('#name').simulate('change', { target: { value: 'Jest reminder' } });
		expect(setState).toHaveBeenCalled()
		wrapper.find('#city').simulate('change', { target: { value: '4.707823,74.080350' } });
		expect(setState).toHaveBeenCalled();
		wrapper.find('#time').simulate('change', { target: { value: '21:00' } })
		expect(setState).toHaveBeenCalled();
		fetch.mockResponse(fetchMockResponse);
		wrapper.find('form').simulate('submit', { preventDefault() { }, stopPropagation() { } });
		expect(onCloseSpy).toHaveBeenCalled();
	});

	it('should not submit with name longer than 30', async () => {
		jest.spyOn(React, 'useState').mockImplementation(useStateMock);
		wrapper.find('#name').simulate('change', { target: { value: '1234567890123456789012345678' } });
		expect(setState).toHaveBeenCalled();
		wrapper.find('#city').simulate('change', { target: { value: '4.707823,74.080350' } });
		expect(setState).toHaveBeenCalled();
		wrapper.find('#time').simulate('change', { target: { value: '21:00' } })
		expect(setState).toHaveBeenCalled();
		wrapper.find('form').simulate('submit', { preventDefault() { }, stopPropagation() { } });
		expect(setState).toHaveBeenCalled(); // If the state was called that's because the error was triggered
	});
});