const initialState = {
    isFetching: false,
    films: [],
    currentFilmDetails: null,
}

export const filmReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'START_FETCH_FILMS_REQUEST':
            return {...state, isFetching: true }
        case 'GET_FILMS_SUCCESS' :
            return {...state, isFetching: false, films: action.payload }
        case 'SHOW_FILM_DETAILS':
            return {...state, currentFilmDetails: action.payload }
    }

    return state; 
}