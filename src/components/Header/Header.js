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
            ACCUEIL
          </Link>
          <Link to="/reserver" className="menu-item">
            RESERVER
          </Link>
          <a id="about" className="menu-item" href="/about">
            DETENTE
          </a>
          <a id="contact" className="menu-item" href="/contact">
            CHALLENGE
          </a>
          <a id="contact" className="menu-item" href="/contact">
            NOUS CONTACTER
          </a>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
