import React from 'react';
import ReactDOM from 'react-dom';
import { HelloFunctionalComponent, HelloComponent, HelloCreateElement, HelloPureComponent } from './components/hello';



const App = () => (
  <div>
      <HelloFunctionalComponent />
      <HelloComponent />
      {HelloCreateElement}
      <HelloPureComponent />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);