import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { months } from './Utils';
import dayjs from 'dayjs';

test('it renders current month', () => {
  const { getByText } = render(<App />);
  const today = dayjs();
  const regexp = new RegExp(months[today.month()], "i");
  const linkElement = getByText(regexp);
  expect(linkElement).toBeInTheDocument();
});
