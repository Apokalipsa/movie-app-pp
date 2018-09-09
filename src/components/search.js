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
                <div className="row">
                    <div className="col-md-10">
                        <input onChange={e => this.handleInput(e)} value={this.state.query} type="text" className="form-control" placeholder="Search Movies" />
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn btn-primary btn-block">Search</button>
                    </div>
                </div>
            </form>
        );
    }
}
export default Search;