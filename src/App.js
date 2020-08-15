import React from 'react';
import { Provider } from 'react-redux';
import Reminder from './components/Reminder'
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
			<Reminder />
		</Provider>
	);
}

export default App;
