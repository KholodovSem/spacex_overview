import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import s from './title.module.css';

function Text() {
  const [flip] = useState(false);
  const props = useSpring({
    to: {opacity: 1},
    from: {opacity: 0},
    reset: true,
    reverse: flip,
    delay: 1000,
    config: {mass: 1, tension: 280, friction: 120, duration: 2000},
  });

  return (
    <animated.h1 style={props} className={s.title}>
      SPACESHIP DRAGON SERIES OVERVIEW
    </animated.h1>
  );
}
export default Text;
