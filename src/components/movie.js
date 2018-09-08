import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Movie extends Component {
    render() {
        const {id}=this.props.match.params;
        return(
            <h1>Movie{id}</h1>
        );
    }
  }
  export default Movie;