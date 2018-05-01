import React from 'react';
import {SearchFilterItem} from './';
import {Context} from './context';

export class Search extends React.Component {
	constructor(props) {
		super(props);

		this.handleInput = this.handleInput.bind(this);
		this.handleActive = this.handleActive.bind(this);
		

		this.state = {
			inputValue: '',
			searchBy: 'Title',
			selectedTab: 0
		}
		
	}

	handleInput(e) {
		this.setState({inputValue: e.target.value})
	}

	handleActive(value, number) {
		// console.log(e.target);
		this.setState({
			searchBy: value,
			selectedTab: number
			// classActive: 'search__filterItem--active'
		});
	}


	render() {
		const {inputValue, classActive, selectedTab} = this.state;
		return (
			<Context.Consumer>
			{
				({onSearch}) => (
					<div className="search">
						<div className="search__title">Find your Movie</div>
						<input type="text" className="search__input" value={inputValue} onInput={this.handleInput} />
						<div className="search__bottom">
							<div className="search__filter">
								<span className="search__filterText">Search By:</span>
								{ 
									['title', 'director'].map((item, i) => 
										<SearchFilterItem key={item} name={item} isActive={ i===selectedTab }  onActive={() => this.handleActive(item, i)} />
									)
								}
								
								{/* <span className={`search__filterItem`} onClick={() => this.handleSearchBy('title', 1)}>title</span>
								<span className={`search__filterItem`} onClick={() => this.handleSearchBy('director', 2)}>Director</span> */}
							</div>
							<button className="search__button" onClick={onSearch}>Search</button>
						</div>
					</div>
				)
			}
			</Context.Consumer>
		)
	}
}
