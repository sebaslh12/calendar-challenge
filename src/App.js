import React from 'react';
import { Provider } from 'react-redux';
import Calendar from './components/Calendar';
import store from './store';
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<h1>Calendar</h1>
				</header>
			</div>
			<Calendar />
		</Provider>
	);
}

export default App;
