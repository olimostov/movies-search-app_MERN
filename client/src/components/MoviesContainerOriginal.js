import { useEffect, useState } from 'react';
// import movie from '../../../server/models/movie';
import MovieCard from './MovieCard';
const apiKey = process.env.REACT_APP_API_KEY;

const MoviesContainer = ({ movies }) => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const getMoviesData = async () => {
      const moviesFullData = await movies.map(movie => {
        return fetchMovieData(movie);
      });
      console.log('moviesFullData :>> ', moviesFullData);
      return moviesFullData;
    };
    getMoviesData();
  }, []);

  const fetchMovieData = async movie => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US`
    );

    const data = await res.json();

    console.log('data :>> ', data);
    setMoviesData([...moviesData, data]);
    return data;
  };

  return (
    <div className='container movies'>
      <div className='row'>
        {movies.map(movie => {
          console.log('movie :>> ', movie);
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default MoviesContainer;
