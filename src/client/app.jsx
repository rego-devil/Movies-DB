import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {ErrorBoundary} from './error-boundary';
import { BrowserRouter as Router} from 'react-router-dom';
import Routing  from './components/routing'
import configureStore from './store/configure-store';
import style from './styles/index.scss';

const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

export const App = (props) => (
  <ErrorBoundary>
    {props.children}
  </ErrorBoundary>
)

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
        <App>
          <Routing />
        </App>
    </Router>
  </Provider>,
  document.getElementById('app')
);