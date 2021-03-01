import { useState } from 'react';
import { Link } from 'react-router-dom';

import M from 'materialize-css';

import film from '../assets/film.svg';

const MovieCard = ({ movie }) => {
  M.AutoInit();
  M.Modal.init();

  const genresList = arr => {
    const genres = arr.map(genre => {
      return genre.name.join(', ');
    });
    console.log('genres :>> ', genres);
    return genres;
  };
  const bookmarkMovie = e => {
    e.preventDefault();
    const bookmarkedMovie = fetch('http://localhost:9000/api/v1/movies/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movie, { _id: 'movie.id' })
    }).then(() => {
      console.log('movie has added');

      console.log('movie: ', bookmarkedMovie);
    });
  };
  return (
    <div className='col s12 m4 l3'>
      <div className='card blue-grey darken-2'>
        <div className='card-image waves-block waves-light'>
          {movie.poster_path ? (
            <img
              className='activator'
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
            />
          ) : (
            <img src={film} className='activator' />
          )}
        </div>
        <div className='card-reveal'>
          <span className='card-title'>
            <i className='fas fa-chevron-down right'></i>
            {movie.original_title}
          </span>

          <p>
            Ratings: {movie.vote_average} <i className='fas fa-star '></i>
          </p>
          <p>
            Genre:{' '}
            {movie.genres.map(genreObj => (
              <span key={genreObj.id}>{genreObj.name}</span>
            ))}
          </p>
          {/* <p>Genre: Genre</p> */}
          <p>Year: {movie.release_date}</p>
          <p>
            <a
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target='_blank'
            >
              Read More
            </a>
          </p>
          <div className='card-action'>
            <button className='btn movie-btn' onClick={bookmarkMovie}>
              Bookmark
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
