import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Movie extends Component {
    constructor() {
        super();
        this.state = {
            movie: {
                original_title: '',
                poster_path: '',
                overview: '',
                release_date: '',
                vote_average: ''

            }
        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;
        console.log(id);
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=c9e28c9b1d0d87033d38b67bc5bfe1e3`)
            .then(response => {
                const movie = response.data;
                console.log(movie);
                // setState = immutable data, this line sendimg data to the empty array in component state
                this.setState({ movie });

            })
            .catch(error => console.log(error));
    }
    render() {
        const base_url = 'https://image.tmdb.org/t/p/original';
        // stay dry
        const { original_title, poster_path, overview, release_date, vote_average } = this.state.movie;
        return (
            <div className="container">
                <div className="row mt-3">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <h1 className="card-title text-center">{original_title}</h1>
                                <p className="card-text">{overview}</p>
                                <p className="list-group-item text-info">Released: {release_date}</p>
                                <p className="list-group-item text-success">Vote Avarge: {vote_average}</p>
                            </div>
                            <div className="card-footer w-100 text-muted text-center">
                                If you don't know that this is right movie to watch this night, than
                                <Link className="btn btn-primary ml-2" to='/'> Back to movies</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top img-fluid" src={`${base_url}${poster_path}`} alt="poster" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export { Movie };
