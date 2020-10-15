import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {
    render() { 
        return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/vidly">Vidly</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
              <NavLink className="nav-item nav-link" to="/movies">
                  Movies
              </NavLink>
              <NavLink className="nav-item nav-link" to="/customers">
                  Customers
              </NavLink>
              <NavLink className="nav-item nav-link" to="/rentals">
                  Rentals
              </NavLink>
          </div>
        </div>
      </nav>  );
    }
}
 
export default Navbar;