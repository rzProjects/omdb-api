import React, { PropTypes } from 'react';
import 'styles/poster.css';

const Poster = props => {
    let element;
    const defaultPoster = '../images/default_poster.jpg';
    const changeSrc = () => {
        element.src = defaultPoster;
    };

    return (
        <img 
            src={props.poster} 
            onError={changeSrc} 
            alt={props.title}
            ref={el => element=el} 
        />
    );
};

Poster.propTypes = {
    title: PropTypes.string.isRequired,
    poster:  PropTypes.string.isRequired
};

export default Poster;