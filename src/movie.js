import React from 'react';
import PropTypes from "prop-types";


function Movie({id, year, title, summary, poster}){
    console.log(title);
    return <h4>{title}</h4>;
}

Movie.prototype = {
    id : PropTypes.string.isRequired,
    year : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

export default Movie;
