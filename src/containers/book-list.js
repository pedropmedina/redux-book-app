import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// actions
import { selectBook, showAllBooks } from '../actions/index';

class BookList extends React.Component {
	renderList = () => {
		console.log({ books: this.props.books });

		return this.props.books.map(book => {
			return (
				<li
					key={book.title}
					className="list-group-item"
					onClick={() => this.props.selectBook(book)}
				>
					{book.title}
				</li>
			);
		});
	};

	render() {
		return (
			<div>
				<ul className="list-group col-sm-4">{this.renderList()}</ul>
			</div>
		);
	}
}

// mapping the state to the component
function mapStateToProps(state) {
	// the object return becomes prop of BookList
	return {
		books: state.books,
		activeBook: state.activeBook,
	};
}

// since react-redux alredy provide the dispatch in the props
// we don't really need to map dispatch to the props. This actually
// overwrites the dispatch function the comes included with
// react-redux
function mapDispatchToProps(dispatch) {
	// whenever selectBook is called, the results should be passed to
	// all of our reducers
	return bindActionCreators({ selectBook }, dispatch);
}

// connect mapStateToProps to the component.
// NOTE: if this weren't a container, but we want to dispatch an action
// to the reducer we still need to call connect, however, we don't need
// to map the state to the props of the component, thus, that first
// call will not take any arguments
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
