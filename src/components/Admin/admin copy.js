import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './admin.css';

const axios = require('axios');

const Admin = () => {
  const [gladiators, setGladiators] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [newGladiators, setNewGladiators] = useState(false);

  // const onSubmit = (data) => {
  //   setNewGladiators(data);
  //   console.log(newGladiators);
  // };
  useEffect(() => {
    axios
      .get('http://localhost:5000/gladiators')
      .then((res) => setGladiators(res.data));
  }, []);

  useEffect(() => {
    if (newGladiators) {
      console.log('YES GOGOGO NEW GLAD');
      axios
        .post('http://localhost:5000/gladiators', { newGladiators })
        .then((res) => console.log(res.data));
    }
  }, [newGladiators]);

  return (
    <div className="admin-container">
      <div className="gladiators-container">
        <h1>Liste des gladiators</h1>
        <table>
          <thead>
            <tr>
              <th>Photo</th>
              <th>Nom</th>
              <th>Arme</th>
              <th>Victoires</th>
              <th>Popularité</th>
            </tr>
          </thead>
          <tbody>
            {gladiators.map((item) => (
              <tr key={item.id}>
                <td>{item.picture}</td>
                <td>{item.name}</td>
                <td>{item.arme}</td>
                <td>{item.victories}</td>
                <td>{item.popularity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <p>Ajouter un Gladiateur</p>
          <form
            onSubmit={handleSubmit((data) => {
              setNewGladiators(data);
              reset();
            })}
          >
            <input name="picture" ref={register} placeholder="Url Photo" />
            <input
              required
              name="name"
              ref={register}
              placeholder="Nom/pseudo"
            />
            <input required name="arme" ref={register} placeholder="arme" />
            <input
              required
              name="victoires"
              ref={register}
              placeholder="victoire(s)"
            />
            <select required name="popularity" ref={register}>
              <option value="">Choisir...</option>
              <option value="basse">basse</option>
              <option value="moyenne">moyenne</option>
              <option value="haute">haute</option>
            </select>

            <input type="submit" />
          </form>
        </div>
      </div>
      <div>
        <p>Modifier un Gladiateur</p>
      </div>
    </div>
  );
};

export default Admin;
