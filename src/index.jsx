import React from 'react';
import ReactDOM from 'react-dom';

const hello = React.createElement('h1', {}, 'Hello world is created using React.createElement');

const HelloWorld = () => (
  <h2>Hello world is created using functional component</h2>
) 

class HelloWorldClass extends React.Component {
  render () {
    return (
      <h3>Hello world is created using React.Component</h3>
    )
  } 
}

const App = () => (
  <div>
      {hello}
      <HelloWorld />
      <HelloWorldClass />
  </div>
)


ReactDOM.render(
  <App />,
  document.getElementById('app')
);