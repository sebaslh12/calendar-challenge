import React from 'react';
import { connect } from 'react-redux';

const Reminder = ({ reminders }) => {
	return (
		<p>{reminders[0]?.name}</p>
	);
}

const mapStateToProps = state => ({
	reminders: state.reminders,
});

export default connect(mapStateToProps)(Reminder);