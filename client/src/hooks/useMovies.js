import { useEffect, useState } from 'react';

const apiKey = process.env.REACT_APP_API_KEY;

export const useMovies = searchTerm => {
  const [lastSearchTermApiCalled, setLastSearchTermApiCalled] = useState(null);
  const [apiResults, setApiResults] = useState(null);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // SEARCH MOVIE
  const searchEndPoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;
  // TOP250 SEARCH
  const top250EndPoint = process.env.REACT_APP_TOP250_END_POINT;

  const nextPage = pageNumber => {};
  const fetchData = url => {
    fetch(url)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log('Got movies list from API :>> ', data);
        setTotalResults(data.total_results);
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
            oneMovie.movieData = movieData;
          }
          resolve(data);
        });
      })
      .then(data => {
        console.log('REACHED THE END OF ALL FETCHING!!!', data);
        setApiResults(data);
      });
  };

  if (searchTerm !== '' && searchTerm !== lastSearchTermApiCalled) {
    setApiResults(null);
    setLastSearchTermApiCalled(searchTerm);
    fetchData(searchEndPoint);
  }

  const isLoading = searchTerm !== '' && apiResults === null;

  return {
    isLoading,
    movies: apiResults === undefined || apiResults === null ? [] : apiResults
  };
};
