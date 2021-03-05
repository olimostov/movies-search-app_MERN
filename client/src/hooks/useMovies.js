import { useEffect, useState } from 'react';
import { useFetch } from './useFetch';

const apiKey = process.env.REACT_APP_API_KEY;

const fetchMovieData = async movie => {
  // console.log('in fetch movie data');
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US`
  );
  const data = await res.json();
  console.log('data:', data);
  return data;
};

export const useMovies = searchTerm => {
  const [lastSearchTermApiCalled, setLastSearchTermApiCalled] = useState(null);
  const [apiResults, setApiResults] = useState(null);

  // const { loading, error, data, fetchNow } = useFetch();

  if (searchTerm !== '' && searchTerm !== lastSearchTermApiCalled) {
    setApiResults(null);
    setLastSearchTermApiCalled(searchTerm);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&include_adult=false`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log('Got movies list from API :>> ', data.results);
        return data.results;
      })
      .then(data => {
        return new Promise(async resolve => {
          console.log('Starting to load each movie in a loop...');
          for (let i = 0; i < data.length; i++) {
            const oneMovie = data[i];
            // console.log(`Loading movie ${oneMovie.id}...`);
            const movieDataApiResult = await fetch(
              `https://api.themoviedb.org/3/movie/${oneMovie.id}?api_key=${apiKey}&language=en-US`
            );
            const movieData = await movieDataApiResult.json();
            // console.log(
            //   `JSON-decoded the API response for ${oneMovie.id}`,
            //   movieData
            // );
            oneMovie.movieData = movieData;
          }
          resolve(data);
        });
      })
      .then(data => {
        console.log('REACHED THE END OF ALL FETCHING!!!', data);
        setApiResults(data);
      });
  }

  const isLoading = searchTerm !== '' && apiResults === null;

  return {
    isLoading,
    movies: apiResults === undefined || apiResults === null ? [] : apiResults
  };
};
