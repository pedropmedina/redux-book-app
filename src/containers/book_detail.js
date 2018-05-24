import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
	render() {
		console.log({ activeBook: this.props.activeBook });
		return (
			<div>
				{this.props.activeBook ? this.props.activeBook.title : undefined}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		activeBook: state.activeBook,
	};
}

export default connect(mapStateToProps)(BookDetail);
