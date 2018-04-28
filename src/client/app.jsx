import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Main, Footer } from './components';
import style from './styles/index.scss';

const App = () => (
  <React.Fragment>
      <Header />
      <Main />
      <Footer />
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