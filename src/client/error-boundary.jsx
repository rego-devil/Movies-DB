import React from 'react';
 

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ 
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.hasError){
      return (
        <div>
          <h1>Something went wrong.</h1>
          {this.state.error && this.state.error.toString()}<br />
          {this.state.errorInfo.componentStack}
        </div>
      )
    }

    return this.props.children;     
  }
}