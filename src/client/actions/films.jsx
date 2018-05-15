export const startFetchFilms = () => ({
    type: 'START_FETCH_FILMS_REQUEST'
})

export const getFilms = (items) => ({
    type: 'GET_FILMS_SUCCESS',
    payload: items
})