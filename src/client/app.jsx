import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {ErrorBoundary} from './error-boundary';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Main, Inner} from './pages';
import { startFetchFilms, getFilms } from './actions';
import { filmReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

import style from './styles/index.scss';

const reducers = combineReducers({
  filmState: filmReducer,
});

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export const App = (props) => (
  <ErrorBoundary>
    {props.children} 
    <ul>
      <li><a href="/">Main</a></li>
      <li><a href="/inner">Inner</a></li>
    </ul>   
  </ErrorBoundary>
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App>
          <Route path="/" component={Main} />
          <Route path="/inner" component={Inner} />
        </App>
    </Router>
  </Provider>,
  document.getElementById('app')
);


