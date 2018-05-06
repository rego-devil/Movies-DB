import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Main} from './components';
import {Context} from './components/context';
import {ErrorBoundary} from './error-boundary';
import style from './styles/index.scss';
 

class App extends React.Component {
  constructor() {
    super();

    this.state = {
		onSearch: this.handleSearch.bind(this),
		searching: false,
		showFilmDetails: false,
		onShowFilmDetails: this.handleFilmDetails.bind(this)
    }
  }

  handleSearch() {
    	this.setState({searching: true})
  }

  handleFilmDetails(value) {
   	 this.setState({showFilmDetails: value})
  }

  render() {
    return (
        <ErrorBoundary>
          	<Header {...this.state} />
          	<Main {...this.state} />
        </ErrorBoundary>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);