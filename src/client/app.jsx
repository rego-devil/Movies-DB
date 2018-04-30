import React from 'react';
import ReactDOM from 'react-dom';
import { Header, Main} from './components';
import {Context} from './components/context';
import style from './styles/index.scss';
 

class App extends React.Component {
  constructor(props) {
    super(props);

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
      <Context.Provider value={this.state}>
        <Header />
        <Main />
      </Context.Provider>
    )
  }
}

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