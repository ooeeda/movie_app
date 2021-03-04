import React from 'react';
import PropTypes from "prop-types";
import "./movie.css"


function Movie({ year, title, summary, poster}){

    return <div class="movie">
        <img src={poster} alt={title} title={title} />
        <div class="movie__data">
            <h3 className="movie__title">{title}</h3>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary}</p>
        </div>
    </div>;
}

Movie.prototype = {
    id : PropTypes.string.isRequired,
    year : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
};

export default Movie;
