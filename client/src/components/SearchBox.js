import { useState } from 'react';

const SearchBox = ({ onSearchSubmit, onSearchInputChange, searchTerm }) => {
  const onSubmit = e => {
    e.preventDefault();

    if (onSearchSubmit) {
      onSearchSubmit();
    }
  };
  return (
    <form className='container' onSubmit={onSubmit}>
      <div className='row'>
        <div className='col s12'>
          <div className='row'>
            <div className='input-field col s12'>
              <i className='fab fa-searchengin prefix'></i>
              <input
                autoComplete='off'
                type='text'
                id='autocomplete-input'
                className='autocomplete'
                value={searchTerm}
                onChange={e => {
                  onSearchInputChange(e.target.value);
                  // setSearchInput(e.target.value);
                }}
              />
              <label htmlFor='autocomplete-input'>Search for a movie</label>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
