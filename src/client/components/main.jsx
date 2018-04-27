import React from 'react';
import {FilmItem} from './';
import filmList from '../data/films.json';

export const Main = () => (
  <div className="main">
      <div className="wrapper">
	  		<ul className="filmList">
			{
				filmList.map(item => <li key={item.id} className="filmItem"><FilmItem {...item} /></li>)
			}
			</ul>
      </div>
  </div>
)