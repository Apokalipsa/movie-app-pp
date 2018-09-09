import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Movie extends Component {
    constructor() {
        super();
        this.state = {
            movie: {
                original_title: '',
                poster_path: ''
            }
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c9e28c9b1d0d87033d38b67bc5bfe1e3`)
            .then(response => {
                const movie = response.data;
                // setState = immutable data, this line sendimg data to the empty array in component state
                this.setState({ movie });
            })
            .catch(error => console.log(error));
    }
    render() {
        const base_url = 'https://image.tmdb.org/t/p/original';
        return (
            <div>
                <Link className="btn btn-primary mt-2" to='/'> Back to movies</Link>
                <h1>{this.state.movie.original_title}</h1>
                <img src={`${base_url}${this.state.movie.poster_path}`} alt="poster" />

            </div>
        );
    }
}

export { Movie };
