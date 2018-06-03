import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {ErrorBoundary} from './error-boundary';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import {MainPage, FilmPage, NotFound} from './pages';
import store from './store/configure-store';
import style from './styles/index.scss';




export const App = (props) => (
  <ErrorBoundary>
    {props.children}
  </ErrorBoundary>
)

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
        <App>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/search" component={MainPage} />
            <Route exact path="/search/:query" component={MainPage} />
            <Route exact path="/film/:id" component={FilmPage} />
            <Route path="*" component={NotFound} />
            {/* <Redirect exact from="/film/:tab" to="/film" /> */}
          </Switch>
        </App>
    </Router>
  </Provider>,
  document.getElementById('app')
);


