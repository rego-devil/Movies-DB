const initialState = {
    showFilmDetails: false,
}

export const statusReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW_FILM_DETAILS':
            return {...state, showFilmDetails: action.payload }
    }

    return state; 
}