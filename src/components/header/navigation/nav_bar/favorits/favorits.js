import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {favoritRocketObjectList} from 'store/selectors/user_selector';
import {ReactComponent as Arrow} from 'img/svg/arrow.svg';
import s from '../profile/profile.module.css';

function Favorits() {
  const favoritsList = useSelector(favoritRocketObjectList);
  const [show, setShow] = useState(false);

  return (
    <div className={s.container}>
      <button className={s.profileBtn} onClick={() => setShow(!show)}>
        Favorits
        <Arrow fill="white" width="16px" className={s.arrowIcon} />
      </button>
      {show && (
        <>
          {favoritsList &&
            favoritsList.map((favorit) => (
              <div key={favorit.id} className={s.linkWrapper}>
                <NavLink className={s.link} to={`dragons/${favorit.id}`}>
                  {favorit.name}
                </NavLink>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default Favorits;
