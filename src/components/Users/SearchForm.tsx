import React  from 'react'
import { Dispatch, SetStateAction } from 'react';

const SearchForm = ({setSearch}:{setSearch:Dispatch<SetStateAction<string>>}) => {

  return (
    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Search</span>
        <input type="text"
                className="form-control"
                placeholder="UserName"
                aria-label="Username"
                aria-describedby="basic-addon1"
                onChange={(event) => setSearch(event.target.value)}
        />
    </div>
  )
}

export default SearchForm