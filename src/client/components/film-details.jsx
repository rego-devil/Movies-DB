import React from 'react';
import { Link } from 'react-router-dom';
import { Loading } from './loading';

export class FilmDetails extends React.Component {

  static async getInitialProps({ req }) {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const json = await res.json()
    console.log('----1111----')
    return { stars: json.stargazers_count }
  }

  componentWillMount() {
    this.props.getFilm(this.props.match.params.id);
  }

  render() {
    
    const {currentFilmDetails, onEmptyCurrentFilm, isFetching} = this.props;
    let result;
    
    if(currentFilmDetails) {

      const {title, vote_average, release_date, runtime, genres, overview, poster_path} = currentFilmDetails;

      result =
          <div className="filmDetails">
            <img className="filmDetails__img"  src={poster_path} />
            <div className="filmDetails__overview">
              <div className="filmDetails__top">
                <div className="filmDetails__title">{title}</div>
                <div className="filmDetails__rating">{vote_average}</div>
                <button className="filmDetails__backToSearch" onClick={() => onEmptyCurrentFilm(null)}>
                  <Link to="/">Back to search</Link>
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
    }
   
    return (
      
      currentFilmDetails ? (
          result
      ) : (isFetching ? <Loading /> : '')
        
    )
  }
  
}