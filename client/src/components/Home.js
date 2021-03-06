import { useState } from 'react';
import MoviesContainer from './MoviesContainer';
import SearchBox from './SearchBox';
import { useMovies } from '../hooks/useMovies';

import M from 'materialize-css/dist/js/materialize.min.js';
const apiKey = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { isLoading, movies } = useMovies(searchTerm);

  const onSearchInputChange = input => {
    setSearchTerm(input);
  };

  let moviesDom;
  if (isLoading) {
    moviesDom = (
      <div className='container'>
        <div class='progress'>
          <div class='indeterminate'></div>
        </div>
      </div>
    );
  } else {
    moviesDom = <MoviesContainer movies={movies} />;
  }

  return (
    <div>
      <SearchBox
        searchTerm={searchTerm}
        onSearchInputChange={onSearchInputChange}
      />

      {moviesDom}
    </div>
  );
};

export default Home;
