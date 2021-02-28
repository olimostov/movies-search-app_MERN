import { useEffect, useState } from 'react';
import MoviesContainer from './MoviesContainer';
import SearchBox from './SearchBox';

const Home = () => {
  const [searchOutput, setSearchOutput] = useState([]);
  const [moviesList, setMoviesList] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;

  const onAdd = input => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}&include_adult=false`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log('Home fetch output: ', data);
        // data.results.()
        setSearchOutput(data.results);
      });
    console.log('searchOutput :>> ', searchOutput);
  };
  return (
    <div>
      <SearchBox onAdd={onAdd} />
      <MoviesContainer movies={searchOutput} />
    </div>
  );
};

export default Home;
