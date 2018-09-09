import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super();
        this.state = {
            query: ''
        }
    }
    handleInput(e) {
        this.setState({ query: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.searchAction(this.state.query);
        // reset input field
        this.setState({ query: '' });

    }
    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <input onChange={e => this.handleInput(e)} value={this.state.query} type="text" className="form-control" placeholder="Search Movies" />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        );
    }
}
export default Search;