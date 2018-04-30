import React from 'react';
import {Context} from './context';

export const FilmItem = ({title, genre, date, imgUrl}) => (
  <Context.Consumer>
    {
		() => (
        	<React.Fragment>
          		<img src={imgUrl} className="filmItem__img" />
          		<div className="filmItem__description">
              		<div className="filmItem__title">{title}</div>
              		<div className="filmItem__releaseYear">{date}</div>
          		</div>
          		<div className="filmItem__genre">{genre}</div>
        	</React.Fragment>
      	)
    }
  </Context.Consumer>
)