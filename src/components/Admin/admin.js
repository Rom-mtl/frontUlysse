import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import './admin.css';

const axios = require('axios');

const Admin = () => {
  const [gladiators, setGladiators] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const [newGladiators, setNewGladiators] = useState('');
  const [pending, setPending] = useState(false);
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    reset: reset2,
  } = useForm();

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
    setPending(true);
  };

  // const findOneGlad = async (e) => {
  //   const idToFind = e.target.value;
  //   console.log(idToFind);
  // };

  // const createAGladiator = async () => {
  //   await axios
  //     .post('http://localhost:5000/gladiators', { newGladiators })
  //     .then((res) => console.log(res.data));
  // };

  useEffect(() => {
    getAllGladiators();
  }, [newGladiators, pending]);

  return (
    <div className="admin-container">
      <div className="preGladiator-container" />
      <div className="gladiators-container">
        <p>Liste des gladiateurs</p>
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
              console.log(data);
              await axios.post('http://localhost:5000/gladiators', {
                data,
              });
              setNewGladiators(data);
              reset();
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
                    <input name="picture" ref={register} />
                  </td>
                  <td>
                    <input required name="name" ref={register} />
                  </td>
                  <td>
                    <input required name="arme" ref={register} />
                  </td>
                  <td>
                    <input required name="victoires" ref={register} />
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
        <div>
          <p>Modifier un Gladiateur</p>

          <form
            onSubmit={handleSubmit2(async (data) => {
              const idGlad = data.id;

              await axios.put(`http://localhost:5000/gladiators/${idGlad}`, {
                data,
              });
              setPending(true);
              reset2();
            })}
          >
            <table>
              <thead>
                <tr>
                  <th>Id</th>
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
                    <input name="id" ref={register2} placeholder="id" />
                  </td>
                  <td>
                    <input name="picture" ref={register2} />
                  </td>
                  <td>
                    <input required name="name" ref={register2} />
                  </td>
                  <td>
                    <input required name="arme" ref={register2} />
                  </td>
                  <td>
                    <input required name="victoires" ref={register2} />
                  </td>
                  <td>
                    <select required name="popularity" ref={register2}>
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
    </div>
  );
};

export default Admin;
