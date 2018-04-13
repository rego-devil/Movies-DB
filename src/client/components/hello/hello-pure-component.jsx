import React from 'react';

export class HelloPureComponent extends React.PureComponent {
  render () {
    return (
      <h3>Hello world is created using React.PureComponent</h3>
    )
  } 
}