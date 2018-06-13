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
        case 'GET_CURRENT_FILM':
            return {...state, isFetching: false, currentFilmDetails: action.payload }
        case 'CHOICE_SEARCH_BY':
            return {...state, searchBy: action.payload }
        case 'SORT_FILMS': 
            return {...state, sortBy: action.payload.sortBy, sortOrder: action.payload.sortOrder}
    }

    return state; 
}