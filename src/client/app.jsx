import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './components/header';
import style from './styles/index.less';

const App = () => (
  <React.Fragment>
      <Header />
  </React.Fragment>
)

ReactDOM.render(
  <App />,
  document.getElementById('app')
);


// import { HelloFunctionalComponent, HelloComponent, HelloCreateElement, HelloPureComponent } from './components/hello';
// const App = () => (
//   <div>
//       <HelloFunctionalComponent />
//       <HelloComponent />
//       {HelloCreateElement}
//       <HelloPureComponent />
//   </div>
// )