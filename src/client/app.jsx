import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {ErrorBoundary} from './error-boundary';
import { Main} from './pages';
import { startFetchFilms, getFilms } from './actions';
import { filmReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

import style from './styles/index.scss';
// import {Context} from './components/context';


const reducers = combineReducers({
  filmState: filmReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
        <ErrorBoundary>
          <Main />
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