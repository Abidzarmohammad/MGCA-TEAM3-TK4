import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div><h2>Selamat Datang di Website Mahasiswa MGCA</h2></div>

      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          List Mahasiswa
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Data Mahasiswa
        </NavLink>
      </div>
    </header>
  );
};

export default Header;