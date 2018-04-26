import React from 'react';

export const Header = () => (
  <div className="header">
      <div className="wrapper">
          <div className="header__siteName">netflixroullete</div>
          <div className="header__title">Find your Movie</div>

          <div className="search">
              	<input type="text" className="search__input" />
            	<div className="search__bottom">
					<div className="search__filter">
						<span className="search__filterText">Search By</span>
						<span className="search__filterItem search__filterItem--active">title</span>
						<span className="search__filterItem">Director</span>
					</div>
					<button className="search__button">Search</button>
              	</div>
          </div>
      </div>
  </div>
)