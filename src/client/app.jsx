import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Main } from './components';
import style from './styles/index.less';

const App = () => (
  <React.Fragment>
      <Header />
      <Main />
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