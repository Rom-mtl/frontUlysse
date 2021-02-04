import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './admin.css';

const axios = require('axios');

const Admin = () => {
  const [gladiators, setGladiators] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [newGladiators, setNewGladiators] = useState('');

  // const onSubmit = (data) => {
  //   setNewGladiators(data);
  //   console.log(newGladiators);
  // };

  const getAllGladiators = async () => {
    await axios
      .get('http://localhost:5000/gladiators')
      .then((res) => setGladiators(res.data));
  };

  const deletteGladiator = async (e) => {
    const idToDel = e.target.id;
    await axios
      .delete('http://localhost:5000/gladiators', { data: { data: idToDel } })
      .then((res) => console.log(res.data));
  };

  // const createAGladiator = async () => {
  //   await axios
  //     .post('http://localhost:5000/gladiators', { newGladiators })
  //     .then((res) => console.log(res.data));
  // };

  useEffect(() => {
    getAllGladiators();
  }, [newGladiators, deletteGladiator]);

  return (
    <div className="admin-container">
      <div className="gladiators-container">
        <h1>Liste des gladiators</h1>
        <table>
          <thead>
            <tr>
              <th>Del</th>
              <th>Id</th>
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
                <td>
                  <button id={item.id} onClick={deletteGladiator} type="submit">
                    X
                  </button>
                </td>
                <td id={item.id}>{item.id}</td>
                <td id={item.picture}>{item.picture}</td>
                <td id={item.name}>{item.name}</td>
                <td id={item.arme}>{item.arme}</td>
                <td id={item.victories}>{item.victories}</td>
                <td id={item.popularity}>{item.popularity}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div>
          <p>Ajouter un Gladiateur</p>

          <form
            onSubmit={handleSubmit(async (data) => {
              reset();
              console.log(data);
              await axios.post('http://localhost:5000/gladiators', {
                data,
              });
              setNewGladiators(data);
            })}
          >
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
                <tr>
                  <td>
                    <input
                      name="picture"
                      ref={register}
                      placeholder="Url Photo"
                    />{' '}
                  </td>
                  <td>
                    <input
                      required
                      name="name"
                      ref={register}
                      placeholder="Nom/pseudo"
                    />
                  </td>
                  <td>
                    <input
                      required
                      name="arme"
                      ref={register}
                      placeholder="arme"
                    />
                  </td>
                  <td>
                    <input
                      required
                      name="victoires"
                      ref={register}
                      placeholder="victoire(s)"
                    />
                  </td>
                  <td>
                    <select required name="popularity" ref={register}>
                      <option value="">Choisir...</option>
                      <option value="basse">basse</option>
                      <option value="moyenne">moyenne</option>
                      <option value="haute">haute</option>
                    </select>
                  </td>
                  <td>
                    <input type="submit" />
                  </td>
                </tr>
              </tbody>
            </table>
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
