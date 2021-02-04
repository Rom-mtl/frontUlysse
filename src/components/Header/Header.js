import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import './header.css';

// import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div>
        <Menu>
          <Link to="/" className="menu-item">
            <img src="./logoUlysse.png" alt="logo" />
          </Link>
          <Link to="/" className="menu-item">
            ACCUEIL
          </Link>
          <Link to="/gladiators" className="menu-item">
            CHALLENGE
          </Link>
          <a id="about" className="menu-item" href="/">
            DETENTE * A venir
          </a>
          <a id="contact" className="menu-item" href="/contact">
            {' '}
            CONTACT * A venir
          </a>
          <Link to="/admin" id="contact" className="menu-item">
            ADMINISTRATION
          </Link>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
