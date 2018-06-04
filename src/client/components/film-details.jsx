import React from 'react';
import { Link } from 'react-router-dom';

export class FilmDetails extends React.Component {

  componentWillMount() {
    console.log(this.props)
    this.props.getFilm(this.props.id);
  }

  render() {
    const {title, vote_average, release_date, runtime, genres, overview, poster_path, onEmptyCurrentFilm } = this.props;
    return (
      
      <div className="filmDetails">
        <img className="filmDetails__img"  src={poster_path} />
        <div className="filmDetails__overview">
          <div className="filmDetails__top">
            <div className="filmDetails__title">{title}</div>
            <div className="filmDetails__rating">{vote_average}</div>
            <button className="filmDetails__backToSearch">
              <Link to="/"  onClick={() => onEmptyCurrentFilm(null)} >Back to search</Link>
            </button>
          </div>
          <div className="filmDetails__middle">
            <div className="filmDetails__date">{release_date && release_date.split('-')[0]}</div>
            <div className="filmDetails__duration">{runtime ? runtime + ` min.` : ''}</div>
          </div>
          <div className="filmDetails__description">{overview}</div>
          <div className="filmDetails__genres">
          {
            genres && genres.map((item, i) => (i > 0 ? ', ':'') + item)
          }
          </div>
        </div>
      </div>
    )
  }
  
}