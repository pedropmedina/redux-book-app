const defaultBooksReducer = [
	{ title: 'Javascript: The Good Parts', pages: 101 },
	{ title: 'Harry Potter', pages: 400 },
	{ title: 'The Dark Tower', pages: 301 },
	{ title: 'Eloquent Ruby', pages: 10 },
];
export default function(state = defaultBooksReducer, action) {
	switch (action.type) {
		default:
			return state;
	}
}
