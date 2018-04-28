import React from 'react';

export const FilmDetails = ({title, rating, date, duration, genre, description, imgUrl, director, cast}) => (
  <div className="filmDetails">
    <img className="filmDetails__img"  src={imgUrl} />
    <div className="filmDetails__description">
      <div>
        <div className="filmDetails__title">{title}</div>
        <div className="filmDetails__rating">{rating}</div>
      </div>
    </div>
  </div>
)