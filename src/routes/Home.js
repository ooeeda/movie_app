import React from 'react';
import axios from "axios";
import Movie from "../components/movie";
import "../routes/home.css"
class Home extends React.Component {

    state = {
        isLoading: true,
        movies: []
    };

    getMoives = async () => {
        //const movies = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
        //console.log(movies.data.data.movies);

        //ES6
        const {
            data: {
                data: {movies}
            }
        } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
        //console.log(movies);
        //this.setState({movies : movies});
        this.setState({movies, isLoading : false });
        //this.setState({isLoading : false});
    };

    componentDidMount() {

        this.getMoives();
    }

    render() {

        console.log("render");


        const {isLoading, movies} = this.state;
        //console.log(movies);
        return (
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className="loader__text">Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(movie => (

                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default Home;
