import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <span className="navbar-logo">
                    <i className="fas fa-leaf"></i>
                </span>
                <h1 className="navbar-title">Habit Tracker</h1>
                <span className="navbar-count">{
                    this.props.totalCount
                }</span>
            </nav>
        );
    }
}

export default Navbar;