import { useEffect, useState } from 'react';
// import movie from '../../../server/models/movie';
import MovieCard from './MovieCard';
const apiKey = process.env.REACT_APP_API_KEY;

const useEffectOff = f => {};

const MoviesContainer = ({ movies }) => {
  // const [moviesData, setMoviesData] = useState([]);

  // useEffectOff(() => {
  //   const moviePromises = movies.map(movie => {
  //     console.log('movie map check');
  //     // return fetchMovieData(movie);
  //   });

  //   Promise.all(moviePromises).then(resolvedMovies => {
  //     console.log('moviePromises :>> ', moviePromises);
  //     console.log('resolvedMovies :>> ', resolvedMovies);

  //     setMoviesData(resolvedMovies);
  //     return resolvedMovies;
  //   });

  //   console.log('moviesData :>> ', moviesData);
  //   // console.log('moviesFullData:', moviesFullData);
  //   // setMoviesData(moviesFullData);
  //   // const moviesFullData = Promise.all(moviePromises).then(movies => {
  //   //   console.log('check here', movies);
  //   // });

  //   // const newMoviesData = [...moviesData];
  //   // newMoviesData.push(data);
  //   // setMoviesData(moviesFullData);
  //   // movies won't work, this is an interim in the .then
  //   // moviesFullData - this should ultimately have all your movies

  //   // const getMoviesData = async () => {
  //   //   const moviesFullData = await movies.map(movie => {
  //   //     return fetchMovieData(movie);
  //   //   });
  //   //   console.log('moviesFullData :>> ', moviesFullData);
  //   //   return moviesFullData;
  //   // };
  //   // getMoviesData();
  //   // console.log('moviesFullData :>> ', moviesFullData);
  //   // console.log('state :>> ', moviesData);
  //   // console.log('moviesData type :>> ', typeof moviesData);
  // }, []);

  return (
    <div className='container movies'>
      <div className='row'>
        {movies.map(oneMovie => {
          console.log('oneMovie :>> ', oneMovie);
          return <MovieCard movie={oneMovie.movieData} key={oneMovie.id} />;
        })}
      </div>
    </div>
  );
};

export default MoviesContainer;
