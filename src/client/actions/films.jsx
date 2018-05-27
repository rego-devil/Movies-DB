import Api from '../api';

export const startFetchFilms = () => ({
    type: 'START_FETCH_FILMS_REQUEST'
})

export const getFilms = (data, count) => ({
    type: 'GET_FILMS_SUCCESS',
    payload: data,
    count: count
})

export const failedFilms = (error) => ({
    type: 'GET_FILMS_FAILED',
    error: error,
})

export const showFilmDetails = (value) => ({
    type: 'SHOW_FILM_DETAILS',
    payload: value
})

export const choiceSearchBy = (value) => ({
    type: 'CHOICE_SEARCH_BY',
    payload: value
})

export const sortByParameter = (value) => ({
    type: 'SORT_FILMS',
    payload: value
})

export const asyncGetFilms = (filterData = {}) => {
    return (dispatch) => {
        
        dispatch(startFetchFilms());
        
        return new Api(filterData).fetchJSON().then(films => {
            if(films.total || films.total == 0)
                dispatch(getFilms(films.data, films.total));
            else {
                dispatch(getFilms([films], 1));
                dispatch(showFilmDetails(films));
            }

        }).catch(error => {
            dispatch(failedFilms(error.message));
        });

    }
}