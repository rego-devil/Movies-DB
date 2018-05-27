import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {ErrorBoundary} from './error-boundary';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {MainPage, FilmPage, NotFound} from './pages';
import { filmReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import {} from './containers';

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
  </ErrorBoundary>
)

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <App>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/film/:id" component={FilmPage} />
            <Route path="*" component={NotFound} />
            {/* <Redirect exact from="/film/:tab" to="/film" /> */}
          </Switch>
        </App>
    </Router>
  </Provider>,
  document.getElementById('app')
);


