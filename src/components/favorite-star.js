import React from 'react';

const FavoriteStar = props => {
    const toggleFavorite = e => {
        e.preventDefault();
        e.stopPropagation();
        if (!props.isFavorite) {
            let movie = {
                Title: props.Title,
                imdbID: props.imdbID,
                Year: props.Year,
                Type: props.Type,
                Poster: props.Poster
            }
            props.addFavorite(movie);
        } else {
            props.removeFavorite(props.imdbID);
        }
    };
    return (
        <div onClick={toggleFavorite} className={props.name}>
            {props.type}
        </div>
    );
};

export default FavoriteStar;