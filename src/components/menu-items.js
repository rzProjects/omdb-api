import React from 'react';
import NavLink from 'components/nav-link';
import Paths from 'utils/paths';

const MenuItems = () => (
     <ul className="main-nav">
        <li><NavLink to={Paths.home()}>Home</NavLink></li>
        <li><NavLink to={Paths.favorites()}>Favorites</NavLink></li>
        <li><NavLink to={Paths.searches()}>Searches</NavLink></li>
    </ul>
);

export default MenuItems;