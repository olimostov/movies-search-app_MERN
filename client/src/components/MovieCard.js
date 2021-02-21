import film from '../assets/film.svg';
const MovieCard = ({ movie, key }) => {
  return (
    <div key={key} className='col s12 m4 l3'>
      <div className='card blue-grey darken-2'>
        <div className='card-image'>
          <button className='bookmark-btn'>
            <i className='far fa-bookmark'></i>
          </button>
          {movie.poster_path ? (
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`}
            />
          ) : (
            <img src={film} className='' />
          )}
        </div>
        <div className='card-content left-align'>
          <span className='card-title'>{movie.original_title}</span>
          <p>
            Ratings: {movie.vote_average} <i className='fas fa-star '></i>
          </p>
          <p>Genre: Drama</p>
          <p>Year: {movie.release_date}</p>

          <a
            href={`https://www.themoviedb.org/movie/${movie.id}`}
            target='_blank'
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
