import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import {ErrorBoundary} from './error-boundary';
import { Main} from './pages';
import { startFetchFilms, getFilms } from './actions';
import { filmReducer, statusReducer } from './reducers';
import style from './styles/index.scss';
// import {Context} from './components/context';


const reducers = combineReducers({
  filmState: filmReducer,
  statusState: statusReducer,
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
    }
  }


  handleSearch() {
    console.log('222');
      store.dispatch(startFetchFilms());

      fetch('http://react-cdp-api.herokuapp.com/movies?limit=100').then((response) => {
        return response.json();
      }).then((films) => {
        store.dispatch(getFilms(films.data));
      }).catch(alert);
  }


  render() {
    return (
        <ErrorBoundary>
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