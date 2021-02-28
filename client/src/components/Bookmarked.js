import { useEffect, useState } from 'react';
import film from '../assets/film.svg';
import M from 'materialize-css';

const Bookmarked = () => {
  M.AutoInit();
  const [bookmarkedMovies, setBookmarkedMovies] = useState([]);

  useEffect(() => {
    getMovies();
    console.log('bookmarkedMovies :>> ', bookmarkedMovies);
  }, []);

  const getMovies = async () => {
    const moviesFromServer = await fetchMovies();
    console.log('moviesFromServer:', moviesFromServer);
    setBookmarkedMovies(moviesFromServer);
  };
  // Fetch movies from db
  const fetchMovies = async () => {
    const res = await fetch('http://localhost:9000/api/v1/movies/');
    const data = await res.json();
    console.log('data :>> ', data);
    return data.data;
  };

  // Delete movie from list
  const deleteFromDB = async _id => {
    await fetch(`http://localhost:9000/api/v1/movies/${_id}`, {
      method: 'DELETE'
    });

    setBookmarkedMovies(bookmarkedMovies.filter(movie => movie._id !== _id));
  };

  return (
    <div className='container'>
      <div className='header'>
        <h2>Bookmarked</h2>
      </div>
      <ul class='collapsible popout'>
        {bookmarkedMovies.map((movie, index) => {
          return (
            <li key={index}>
              <div className='collapsible-header blue-grey darken-2'>
                <div>
                  <i className='fas fa-film'> </i>
                  {index + 1} {movie.original_title}
                </div>{' '}
                <div>
                  Ratings: {movie.vote_average} <i className='fas fa-star '></i>
                </div>
              </div>
              <div className='collapsible-body row'>
                {
                  <div className='bookmarked-image col s2'>
                    {movie.poster_path ? (
                      <img
                        className='activator'
                        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
                      />
                    ) : (
                      <img src={film} className='' />
                    )}
                  </div>
                }{' '}
                <span className='col s10'>{movie.overview}</span>
                <a
                  className='col s10'
                  href={`https://www.themoviedb.org/movie/${movie.id}`}
                  target='_blank'
                >
                  Read More
                </a>
                <button
                  className='btn movie-btn delete-btn col'
                  onClick={deleteFromDB}
                >
                  Delete from List
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Bookmarked;
