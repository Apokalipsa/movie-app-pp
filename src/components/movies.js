import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Search from './search';


class Movies extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    componentDidMount() {
        axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c9e28c9b1d0d87033d38b67bc5bfe1e3")
            .then(response => {
                const movies = response.data.results;
                // setState = immutable data, this line sendimg data to the empty array in component state
                this.setState({ movies });
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <div>
                <Search/>
                <h1>Movies</h1>
                {this.state.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)};
            </div>

        );
    }
}
//  This is a functional component
function MovieCard({ movie }) {
    return (
        <Link to={`/movies/${movie.id}`}>
            <p>{movie.title}</p>
        </Link>
    );
}
export default Movies;
