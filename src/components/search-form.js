import React, { PropTypes } from 'react';
import 'styles/search-form.css';

const SearchForm = props => {
    let query;
    const handleSubmit = e => {
        e.preventDefault();
        props.onSearch(query.value);
        e.currentTarget.reset();
    };
    
    return (
        <form className="search-form" onSubmit={handleSubmit} >
            <label className="hidden-label" htmlFor="search">Search</label>
            <input 
                type="text"
                name="search"
                ref={input => query = input}
                placeholder="Search..."
            />
            <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
        </form>
    );
};

SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default SearchForm;