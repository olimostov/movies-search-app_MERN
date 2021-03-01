import { useEffect, useState } from 'react';
import MoviesContainer from './MoviesContainer';
import SearchBox from './SearchBox';
import { useMovies } from '../hooks/useMovies';

const Home = () => {
  // const [searchOutput, setSearchOutput] = useState([]);
  // const [moviesList, setMoviesList] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const { isLoading, movies } = useMovies(searchTerm);

  const onSearchInputChange = input => {
    setSearchTerm(input);
  };

  // const onAddOld = input => {
  //   fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}&include_adult=false`
  //   )
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       console.log('Home fetch output: ', data);
  //       // data.results.()
  //       setSearchOutput(data.results);
  //     });
  //   console.log('searchOutput :>> ', searchOutput);
  // };

  let moviesDom;
  if (isLoading) {
    moviesDom = <div>Loading...</div>;
  } else {
    moviesDom = <MoviesContainer movies={movies} />;
  }

  return (
    <div>
      <SearchBox
        searchTerm={searchTerm}
        onSearchInputChange={onSearchInputChange}
      />
      {/* <MoviesContainer movies={searchOutput} /> */}
      {moviesDom}
    </div>
  );
};

export default Home;
