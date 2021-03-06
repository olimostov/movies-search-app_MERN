import { useState, useEffect } from 'react';
import _testData from '../_testData.json';
import MoviesContainer from './MoviesContainer';
import { useTop250 } from '../hooks/useTop250';

const apiEndPoint = process.env.REACT_APP_IMDB_TOP250_END_POINT;

const Top250 = () => {
  const { isLoading, movies } = useTop250();

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

  return <>{moviesDom}</>;
};

export default Top250;
