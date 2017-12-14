import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'Black',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
      to="/"
      exact
      style={link}
      activeStyle={{
        background: 'Blue'
      }}
      >Home</NavLink>
      <NavLink
      to="/categories"
      exact
      style={link}
      activeStyle={{
        background: 'Blue'
      }}
      >Categories</NavLink>
      <NavLink
      to="/records"
      exact
      style={link}
      activeStyle={{
        background: 'Blue'
      }}
      >Records</NavLink>
      <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: 'Blue'
      }}
      >About</NavLink>
    </div>
  );
};

export default NavBar;
