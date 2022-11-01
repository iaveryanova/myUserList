import React, { Dispatch } from 'react';

const SearchUser = ({
  name,
  setSearch,
}: {
  name: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className='input-group mb-3 mt-3'>
      <span className='input-group-text' id='basic-addon1'>
        Search
      </span>
      <input
        type='text'
        className='form-control'
        placeholder={name}
        onChange={(event) => setSearch(event.target.value)}
      />
    </div>
  );
};

export default SearchUser;
