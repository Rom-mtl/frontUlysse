import React, { useEffect, useState } from 'react';
import './gladiators.css';

const axios = require('axios');

const Gladiators = () => {
  const [gladiators, setGladiators] = useState([]);

  const getAllGladiators = async () => {
    await axios
      .get('http://localhost:5000/gladiators')
      .then((res) => setGladiators(res.data));
  };

  useEffect(() => {
    getAllGladiators();
  }, []);

  return (
    <div className="gladContainer">
      <div className="gladBackground" />
      <div className="gladMessage">
        <h1>Combattez nos puissants Gladiateurs</h1>
      </div>
      <div className="gladDetails">
        {gladiators.map((item) => (
          <div className="gladCard" key={item.id}>
            <div>
              <img src={item.picture} alt={item.name} />
            </div>
            <div>
              <p>nom: {item.name}</p>
              <p>Victoire(s): {item.victories}</p>
              <p>Arme favorite: {item.arme}</p>
              <p>Popularité(e): {item.popularity}</p>
            </div>
            <div>
              <button type="submit" label="Affronter">
                Affronter
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gladiators;
