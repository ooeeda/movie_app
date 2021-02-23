import React from 'react';
import axios from "axios";

class App3 extends React.Component {

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
        } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
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

        const {isLoading} = this.state;

        return (
            <div>
                {/*{this.state.isLoading ? "Loading" : "We are ready"}*/}
                {isLoading ? "Loading.." : "We are ready"}


            </div>);
    }
}

export default App3;
