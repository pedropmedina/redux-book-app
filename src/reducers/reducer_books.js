const defaultBooksReducer = [
	{ title: 'Javascript: The Good Parts' },
	{ title: 'Harry Potter' },
	{ title: 'The Dark Tower' },
	{ title: 'Eloquent Ruby' },
];
export default function(state = defaultBooksReducer, action) {
	switch (action.type) {
		default:
			return state;
	}
}
