import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {ErrorBoundary} from './error-boundary';
import { Header, Main} from './components';
import { startFetchFilms, getFilms } from './actions';
import { FilmListContainer } from './containers/film-list-container';
import { filmReducer } from './reducers';
import style from './styles/index.scss';
// import {Context} from './components/context';


const reducers = combineReducers({
  filmState: filmReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
		onSearch: this.handleSearch.bind(this),
		searching: false,
		showFilmDetails: false,
		onShowFilmDetails: this.handleFilmDetails.bind(this)
    }
  }


  handleSearch() {
      this.setState({searching: true});
      store.dispatch(startFetchFilms());

      fetch('http://react-cdp-api.herokuapp.com/movies?limit=100').then((response) => {
        return response.json();
      }).then((films) => {
        store.dispatch(getFilms(films.data));
      }).catch(alert);
  }

  handleFilmDetails(value) {
   	 this.setState({showFilmDetails: value})
  }

  render() {
    return (
        <ErrorBoundary>
          	<Header {...this.state} />
          	<Main {...this.state} />
        </ErrorBoundary>
    )
  }
}

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('app')
);