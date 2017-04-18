import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import Paths from 'utils/paths';
import 'styles/movie.css';

const SearchItem = props => {
    const searchAgain = () => {
        props.performSearch(props.query);
        browserHistory.push(Paths.home());
    }
    return (
        <li onClick={searchAgain} className="search-wrap">
            {props.query}
        </li>
    );
};

SearchItem.propTypes = {
    query: PropTypes.string.isRequired
};

export default SearchItem;