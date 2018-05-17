export const startFetchFilms = () => ({
    type: 'START_FETCH_FILMS_REQUEST'
})

export const getFilms = (items) => ({
    type: 'GET_FILMS_SUCCESS',
    payload: items
})

export const asyncGetFilms = () => {
    return (dispatch) => {

        dispatch(startFetchFilms());
        
        fetch('http://react-cdp-api.herokuapp.com/movies?limit=20').then(response => {
            return response.json();
        }).then(films => {
            dispatch(getFilms(films.data));
        }).catch(error => {
            throw new Error(`ERROR!!! ${error}`);
        });
    }
}