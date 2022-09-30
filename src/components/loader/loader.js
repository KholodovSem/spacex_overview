import React from 'react';
import {SpinnerCircular} from 'spinners-react';
import s from './loader.module.css';

function Loader({customStyle = false}) {
  return (
    <div className={!customStyle ? `${s.loaderWrapper}` : `${s.customStyle}`}>
      <SpinnerCircular
        size={65}
        thickness={130}
        speed={180}
        color="rgba(255, 165, 0, 1)"
        secondaryColor="rgba(255, 255, 255, 1)"
        className={s.loader}
      />
    </div>
  );
}

export default Loader;
