/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, withRouter } from "react-router-dom";
// read on importing NavLink
// navlink - shows active on the elemnt clicked. => it is useful if you want to add designs upon cicking.

const Navbar = () => {
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Poke'Times</a>
        <ul className="right">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// applying higher-order-component(withRouter)
// the withRouter function wraps the component(Navbar), applies the props to the component and
// returns the new Navbar component with props added
export default withRouter(Navbar);
