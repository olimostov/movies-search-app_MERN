import { useEffect, useState } from 'react';
import MoviesContainer from './MoviesContainer';
import SearchBox from './SearchBox';

const Home = () => {
  const [searchOutput, setSearchOutput] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const onAdd = input => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input}`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log('Home fetch output: ', data);
        // data.results.()
        setSearchOutput(data.results);
      });
  };
  //   useEffect(() => {
  //   setSearchOutput()
  // },[])
  return (
    <div>
      <SearchBox onAdd={onAdd} />
      <MoviesContainer movies={searchOutput} />
    </div>
  );
};

export default Home;
