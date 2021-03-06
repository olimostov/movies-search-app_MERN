import { useState, useEffect } from 'react';

const apiEndPoint = process.env.REACT_APP_TOP250_END_POINT;
const apiKey = process.env.REACT_APP_API_KEY;
export const useTop250 = () => {
  const [top250, setTop250] = useState(null);
  useEffect(() => {
    fetch(apiEndPoint)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log('Top250 data :>> ', data);
        return data.results;
      })
      .then(data => {
        return new Promise(async resolve => {
          for (let i = 0; i < data.length; i++) {
            const oneMovie = data[i];
            const movieDataApiResult = await fetch(
              `https://api.themoviedb.org/3/movie/${oneMovie.id}?api_key=${apiKey}&language=en-US`
            );
            const movieData = await movieDataApiResult.json();
            oneMovie.movieData = movieData;
          }
          resolve(data);
        });
      })
      .then(data => {
        setTop250(data);
      });
  }, []);

  const isLoading = top250 === null;
  return {
    isLoading,
    movies: top250 === undefined || top250 === null ? [] : top250
  };
};
