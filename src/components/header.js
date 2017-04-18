import React, { PropTypes } from 'react';
import MenuItems from 'components/menu-items';
import SearchForm from 'components/search-form';
import 'styles/header.css';

const Header = props => (
    <div className="main-header">
        <div className="inner">
            <MenuItems />
            <SearchForm onSearch={props.performSearch} />
        </div>
    </div>
);

Header.propTypes = {
    performSearch: PropTypes.func.isRequired
};

export default Header;