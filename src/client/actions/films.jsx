import Api from '../api';

export const startFetchFilms = () => ({
    type: 'START_FETCH_FILMS_REQUEST'
})

export const getFilms = (data) => ({
    type: 'GET_FILMS_SUCCESS',
    payload: data
})

export const abortGetFilms = (error) => ({
    type: 'GET_FILMS_FAILED',
    error: error,
})

export const currentFilm = (value) => ({
    type: 'GET_CURRENT_FILM',
    payload: value
})

export const choiceSearchBy = (value) => ({
    type: 'CHOICE_SEARCH_BY',
    payload: value
})

export const saveSearchParemeters = (value) => ({
    type: 'SAVE_SEARCH_VALUES',
    payload: value
})

export const sortByParameter = (value) => ({
    type: 'SORT_FILMS',
    payload: value
})

//redux saga
export const fetchFilmsAsync = (query) => ({
    type: 'FETCH_FILMS_ASYNC',
    payload: query
})

export const fetchFilmByIDAsync = (id) => ({
    type: 'FETCH_FILM_BY_ID_ASYNC',
    payload: id
})

// redux thunk
// export const asyncGetFilms = (filterData = {}) => {
//     return (dispatch) => {
        
//         dispatch(startFetchFilms());
        
//         return new Api(filterData).fetchJSON().then(films => {
//             if(films.total || films.total == 0)
//                 dispatch(getFilms(films.data, films.data.length));
//             else {
//                dispatch(currentFilm(films))
//             }

//         }).catch(error => {
//             dispatch(abortGetFilms(error.message));
//         });

//     }
// }