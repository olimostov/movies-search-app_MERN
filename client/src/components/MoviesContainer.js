import MovieCard from './MovieCard';
const apiKey = process.env.REACT_APP_API_KEY;

const MoviesContainer = ({ movies }) => {
  return (
    <div className='container movies'>
      <div className='row'>
        {movies.map(oneMovie => {
          // console.log('oneMovie :>> ', oneMovie);
          return <MovieCard movie={oneMovie.movieData} key={oneMovie.id} />;
        })}
      </div>
    </div>
  );
};

export default MoviesContainer;
