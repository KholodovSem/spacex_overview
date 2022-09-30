import React from 'react';
import s from './error.module.css';

function Error() {
  return (
    <div className={s.errorWrapper}>
      <h1 className={s.errorTitle}>Oops, try again later</h1>
      <img
        src="https://i.imgur.com/qkY418o.png"
        alt="Elon Musk"
        className={s.meme}
      />
    </div>
  );
}

export default Error;
