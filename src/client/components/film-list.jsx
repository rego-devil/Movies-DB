import React from 'react';
import {FilmItem} from './';
import filmListJson from '../data/films.json';

export const FilmList = () => (
  <ul className="filmList">
			{
				filmListJson.map((item) => 
          <li key={item.id} className="filmItem"><FilmItem {...item} /></li>
        )
			}
	</ul>
)