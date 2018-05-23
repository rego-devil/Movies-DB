const initialState = {
    isFetching: false,
    films: [],
    currentFilmDetails: null,
    searchBy: 'title',
    sortBy: 'release_date',
    sortOrder: 'desc',
    count: 0,
    error: '',
}

export const filmReducer = (state = initialState, action) => {

    switch(action.type) {
        case 'START_FETCH_FILMS_REQUEST':
            return {...state, isFetching: true }
        case 'GET_FILMS_FAILED':
            return {...state, isFetching: false, error: action.error }
        case 'GET_FILMS_SUCCESS' :
            return {...state, isFetching: false, films: action.payload, count: action.count }
        case 'SHOW_FILM_DETAILS':
            return {...state, currentFilmDetails: action.payload }
        case 'CHOICE_SEARCH_BY':
            return {...state, searchBy: action.payload }
        case 'SORT_FILMS': 

            const sortBy = action.payload.sortBy;
            const sortOrder = action.payload.sortOrder;

            state.films.sort((a,b) => {
                if( sortOrder === 'desc') {
                    if (a[sortBy] > b[sortBy]) return -1;
                    if (a[sortBy] < b[sortBy]) return 1;
                }
                if( sortOrder === 'asc') {
                    if (a[sortBy] > b[sortBy]) return 1;
                    if (a[sortBy] < b[sortBy]) return -1;
                }
                return 0;
            });
            
            return {...state, sortBy, sortOrder,  films: state.films }
    }

    return state; 
}