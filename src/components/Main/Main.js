import React from 'react';
import './main.css';
// import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main>
      <div className="main-container">
        <div className="main-background">
          <h1 className="message">
            Bienvenu(e) en Itaque <br /> Détendez vous sur mon île <br /> ou
            affrontez mes Argonautes... "Ulysse"
          </h1>
        </div>
        <div className="main-detente">
          <h1>Détente</h1>
        </div>
        <div className="main-detente-background">
          <p>Découvrez des plages paradisiaques</p>
          <p>Du soleil 365 jours par an</p>
        </div>
        <div className="main-challenge">
          <h1>Challenge</h1>
        </div>
        <div className="main-challenge-background">
          <p>Venez affronter les puissants argonnautes</p>
          <p>Survivrez-vous dans l'arène ?</p>
        </div>
        <div className="main-reserver">
          <h1>Réserver</h1>
        </div>
      </div>
    </main>
  );
};

export default Main;
