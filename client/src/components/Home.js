import { useEffect, useState } from 'react';
import MoviesContainer from './MoviesContainer';
import SearchBox from './SearchBox';
import { useMovies } from '../hooks/useMovies';

// import M from 'materialize-css';
import M from 'materialize-css/dist/js/materialize.min.js';

// initializing materialize autofill input
// const autoInput = M.Autocomplete.init();
// M.Autocomplete.init();

const apiKey = process.env.REACT_APP_API_KEY;
// const options2 = {
//   '247°F': null,
//   'B.F.F.': null,
//   'Best F(r)iends: Volume 1': null,
//   'Best F(r)iends: Volume 2': null,
//   'Christiane F. - Wir Kinder vom Bahnhof Zoo': null,
//   F: null,
//   'F for Franco': null,
//   'F#Ck Nick Cannon': null,
//   'F*&% the Prom': null,
//   'F/X': null,
//   'F/X2': null,
//   Fandango: null,
//   "I'm Just F*cking with You": null,
//   'The Death & Life of John F. Donovan': null,
//   'The F Word': null,
//   'The F**k-It List': null,
//   'The Other F Word': null,
//   'U.F.O.': null,
//   'ドラゴンボールZ 復活の「F」': null,
//   'ドラゴンボールZ 復活の「F」 “未来”トランクス特別編': null
// };

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
