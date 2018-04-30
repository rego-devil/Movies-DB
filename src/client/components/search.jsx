import React from 'react';
import {Context} from './context';

export const Search = () => (
	<Context.Consumer>
	{
		({onSearch}) => (
			<div className="search">
				<div className="search__title">Find your Movie</div>
				<input type="text" className="search__input" />
				<div className="search__bottom">
					<div className="search__filter">
						<span className="search__filterText">Search By:</span>
						<span className="search__filterItem search__filterItem--active">title</span>
						<span className="search__filterItem">Director</span>
					</div>
					<button className="search__button" onClick={onSearch}>Search</button>
				</div>
			</div>
		)
	}
	</Context.Consumer>
)