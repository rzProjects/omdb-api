import React from 'react';
import SearchItem from 'components/search-item';
import 'styles/search-list.css';

const SearchList = props => (
    <ul className="search-list">
        {props.movieSearches.map((search, index) => (
            <SearchItem 
                performSearch={props.performSearch}
                key={index}
                query={search}
            />
        ))}
    </ul>
);

export default SearchList;