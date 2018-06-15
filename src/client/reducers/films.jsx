const initialState = {
  isFetching: false,
  films: [],
  total: 0,
  searchField: '',
  currentFilmDetails: null,
  searchBy: 'title',
  sortBy: 'release_date',
  sortOrder: 'desc',
  count: 0,
  error: '',
  perPage: 20
};

const filmReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_FETCH_FILMS_REQUEST':
      return { ...state, isFetching: true };
    case 'GET_FILMS_FAILED':
      return { ...state, isFetching: false, error: action.error };
    case 'GET_FILMS_SUCCESS':
      return {
        ...state, isFetching: false, films: action.payload.data, count: action.payload.data.length, total: action.payload.total
      };
    case 'GET_CURRENT_FILM':
      return { ...state, isFetching: false, currentFilmDetails: action.payload };
    case 'CHOICE_SEARCH_BY':
      return { ...state, searchBy: action.payload };
    case 'SAVE_SEARCH_VALUES':
      return { ...state, searchField: action.payload.search };
    case 'SORT_FILMS':
      return { ...state, sortBy: action.payload.sortBy, sortOrder: action.payload.sortOrder };
    default:
      return state;
  }
};

export default filmReducer;
