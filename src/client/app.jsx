import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ErrorBoundary } from './error-boundary';
import Routing from './components/routing';
import configureStore from './store/configure-store';
import './styles/index.scss';

const store = configureStore(window.PRELOADED_STATE);
delete window.PRELOADED_STATE;

// export const App = (props) => (
//   <ErrorBoundary>
//     {props.children}
//   </ErrorBoundary>
// )

ReactDOM.hydrate(
  <Provider store={store}>
    <Router>
      <ErrorBoundary>
        <Routing />
      </ErrorBoundary>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
