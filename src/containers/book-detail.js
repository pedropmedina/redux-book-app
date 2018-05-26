import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
	render() {
		console.log({ activeBook: this.props.activeBook });
		return (
			<div>
				{this.props.activeBook ? (
					<div>
						<p>Title: {this.props.activeBook.title}</p>
						<p>Pages: {this.props.activeBook.pages}</p>
					</div>
				) : (
					'Select a book to display details'
				)}
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
