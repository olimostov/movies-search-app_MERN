import MovieCard from './MovieCard';

const MoviesContainer = ({ movies }) => {
  return (
    <div className='container'>
      <div className='row'>
        {movies.map(movie => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    </div>
  );
};

export default MoviesContainer;
