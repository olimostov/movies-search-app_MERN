import { useEffect, useState } from 'react';
// import movie from '../../../server/models/movie';
import MovieCard from './MovieCard';
const apiKey = process.env.REACT_APP_API_KEY;

const MoviesContainer = ({ movies }) => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const moviePromises = movies.map(movie => {
      console.log('movie map check');
      return fetchMovieData(movie);
    });

    const resolved = Promise.all(moviePromises).then(resolvedMovies => {
      console.log('moviePromises :>> ', moviePromises);
      console.log('resolvedMovies :>> ', resolvedMovies);

      return resolvedMovies;
    });

    setTimeout(() => {
      console.log('the stack is now empty');
      setMoviesData(resolved);
    }, 500);
    console.log('moviesData :>> ', moviesData);
    // console.log('moviesFullData:', moviesFullData);
    // setMoviesData(moviesFullData);
    // const moviesFullData = Promise.all(moviePromises).then(movies => {
    //   console.log('check here', movies);
    // });

    // const newMoviesData = [...moviesData];
    // newMoviesData.push(data);
    // setMoviesData(moviesFullData);
    // movies won't work, this is an interim in the .then
    // moviesFullData - this should ultimately have all your movies

    // const getMoviesData = async () => {
    //   const moviesFullData = await movies.map(movie => {
    //     return fetchMovieData(movie);
    //   });
    //   console.log('moviesFullData :>> ', moviesFullData);
    //   return moviesFullData;
    // };
    // getMoviesData();
    // console.log('moviesFullData :>> ', moviesFullData);
    // console.log('state :>> ', moviesData);
    // console.log('moviesData type :>> ', typeof moviesData);
  }, []);

  const fetchMovieData = async movie => {
    // console.log('in fetch movie data');
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US`
    );
    const data = await res.json();
    console.log('data:', data);
    return data;
  };

  return (
    <div className='container movies'>
      <div className='row'>
        {movies.map(movieFullData => {
          console.log('movie :>> ', movieFullData);
          return <MovieCard movie={movieFullData} key={movieFullData.id} />;
        })}
      </div>
    </div>
  );
};

export default MoviesContainer;
