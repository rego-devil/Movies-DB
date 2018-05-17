import Api from '../api';

export const startFetchFilms = () => ({
    type: 'START_FETCH_FILMS_REQUEST'
})

export const getFilms = (items) => ({
    type: 'GET_FILMS_SUCCESS',
    payload: items
})

export const showFilmDetails = (value) => ({
    type: 'SHOW_FILM_DETAILS',
    payload: value
})

export const asyncGetFilms = (filterData = {}) => {
    return (dispatch) => {
        
        dispatch(startFetchFilms());
        
        new Api(filterData).fetchJSON().then(films => {

            dispatch(getFilms(films.data));

        }).catch(error => {
            throw new Error(`ERROR!!! ${error}`);
        });

    }
}