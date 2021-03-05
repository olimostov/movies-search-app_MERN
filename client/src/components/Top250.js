import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import MoviesContainer from './MoviesContainer';

const Top250 = () => {
  const [top250, setTop250] = useState([]);
  const apiEndPoint = process.env.REACT_APP_TOP250_END_POINT;
  console.log('apiEndPoint:', apiEndPoint);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const getTop = async () => {
      const top250Movies = await fetchTop250();
      setTop250(top250Movies);
    };
    getTop();
    console.log('top250 :>> ', top250);
  }, []);

  // Fetch Top250 movies
  const fetchTop250 = async () => {
    const res = await fetch(`${apiEndPoint}api_key=${apiKey}&language=en-US`);
    const data = await res.json();
    console.log('data.results :>> ', data.results);
    return data.results;
  };

  return <MoviesContainer movies={top250} />;
};

export default Top250;
