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
    searchQuery(searchTerm) {
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=c9e28c9b1d0d87033d38b67bc5bfe1e3&language=en-US&query=" + searchTerm)
            .then(response => {
                const movies = response.data.results;
                // setState = immutable data, this line sendimg data to the empty array in component state
                this.setState({ movies });
            }).catch(error => console.log(error));
    }
    render() {
        return (
            <div className="container mt-3">
                <Search searchAction={(query) => this.searchQuery(query)} />
                <h1 className="text-center">Movies</h1>
                <div className="row">
                    {this.state.movies.map(movie => <MovieCard key={movie.id} movie={movie} />)};
            </div>
            </div>
        );
    }
}
//  This is a functional component
function MovieCard({ movie }) {
    const base_url = 'https://image.tmdb.org/t/p/original';
    return (
        <div className="col-md-3">
            <Link to={`/movies/${movie.id}`}>
                <img className="img-fluid" src={`${base_url}${movie.poster_path}`} alt="poster" />
                <p>{movie.title}</p>
            </Link>
        </div>
    );
}
export default Movies;
