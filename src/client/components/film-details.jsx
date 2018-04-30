import React from 'react';

export const FilmDetails = ({title, rating, date, duration, genre, description, imgUrl, director, cast}) => (
  <div className="filmDetails">
    <img className="filmDetails__img"  src={imgUrl} />
    <div className="filmDetails__description">
      <div className="filmDetails__top">
        <div className="filmDetails__title">{title}</div>
        <div className="filmDetails__rating">{rating}</div>
      </div>
      <div className="filmDetails__middle">
        <div className="filmDetails__date">{date}</div>
        <div className="filmDetails__duration">{duration} min.</div>
      </div>
      <div className="filmDetails__description">{description}</div>
      <div className="filmDetails__director">{director}</div>
      <div className="filmDetails__cast">{cast}</div>
    </div>
  </div>
)