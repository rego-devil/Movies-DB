import React from 'react';
import {Context} from './context';

export class Search extends React.Component {
	constructor(props) {
		super(props);

		this.handleInput = this.handleInput.bind(this);
		this.handleActive = this.handleActive.bind(this);
		

		this.state = {
			search: '',
			searchBy: 'title'
		}
		
	}

	handleInput(e) {
		console.log(e.target.value.charAt(0).toUpperCase())
		this.setState({search: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1) })
	}

	handleActive(value) {
		this.setState({
			searchBy: value,
		});
	}


	render() {
		const {search, searchBy} = this.state;
		const {onSearch} = this.props;
		return (
			<div className="search">
				<div className="search__title">Find your Movie</div>
				<input type="text" className="search__input" value={search} onChange={this.handleInput} />
				<div className="search__bottom">
					<div className="search__filter">
						<span className="search__filterText">Search By:</span>
						{ 
							['title', 'genres'].map((item, i) => {
								return <span key={item} 
										className={`search__filterItem ${item===searchBy ? 'search__filterItem--active':''}`}
										onClick={() => this.handleActive(item)}>
									{item}
								</span>
							})
						}
					</div>
					<button className="search__button" onClick={() => onSearch({search, searchBy})}>Search</button>
				</div>
			</div>
		)
	}
}
