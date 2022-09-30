import React from 'react';
import Overview from 'components/overview/overview';
import s from './rocket.module.css';

function Rocket({name, id}) {
  return (
    <div className={s.rocket}>
      {name === 'Dragon 1' ? (
        <img
          src="https://i.imgur.com/BQ2cXMs.png"
          alt="dragon 1"
          className={s.rocketImage}
        />
      ) : name === 'Dragon 2' ? (
        <img
          src="https://i.imgur.com/7rhF67O.png"
          alt="dragon 2"
          className={s.rocketImage}
        />
      ) : null}
      <Overview name={name} id={id} />
    </div>
  );
}

export default Rocket;
