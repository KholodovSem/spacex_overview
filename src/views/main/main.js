import React from 'react';
import Text from './title';
import s from './main.module.css';

function Main() {
  return (
    <div className={`${s.main} container`}>
      <div className={s.rocket}>
        <img
          src="https://i.imgur.com/v7OwftJ.png"
          alt="dragon one"
          className={s.dragonImg}
        />
      </div>
      <Text />
    </div>
  );
}

export default Main;
