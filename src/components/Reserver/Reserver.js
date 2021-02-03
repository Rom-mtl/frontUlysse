import React from 'react';
import './reserver.css';
// import { Link } from 'react-router-dom';

const Reserver = () => {
  return (
    <div className="reserver-container">
      <div className="main-reserver">
        <h1>Réserver</h1>
      </div>
      <div className="reserver-middlebox">
        <div className="reserver-challenge">
          <h1>CHALLENGE</h1>
        </div>
        <div className="reserver-hotel">
          <h1>HOTEL</h1>
        </div>
        <div className="reserver-chatbox">
          <h1>ChatBox</h1>
        </div>
      </div>
    </div>
  );
};

export default Reserver;
