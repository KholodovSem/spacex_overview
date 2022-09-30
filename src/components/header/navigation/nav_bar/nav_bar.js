import React, {useState, useRef} from 'react';
import {Transition} from 'react-transition-group';
import {useDispatch} from 'react-redux';
import {handleLogout} from 'store/operations/user_operations';
import Profile from './profile/profile';
import Favorits from './favorits/favorits';
import {ReactComponent as UserAvatar} from 'img/svg/defaultAvatar.svg';
import {ReactComponent as CloseIcon} from 'img/svg/closeIcon.svg';
import s from '../navigation.module.css';

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const nodeRef = useRef(null);

  return (
    <div className={s.navBar}>
      <Transition in={toggle} nodeRef={nodeRef} unmountOnExit timeout={500}>
        {(state) => (
          <div className={`burger ${state}`} ref={nodeRef}>
            <button className="burgerBtn" onClick={() => setToggle(!toggle)}>
              <CloseIcon className="burgerCloseIcon" />
            </button>
            <Profile />
            <Favorits />
            <button
              className={s.logout}
              onClick={() => dispatch(handleLogout())}
            >
              Logout
            </button>
          </div>
        )}
      </Transition>
      <button className={s.burgerBtn} onClick={() => setToggle(!toggle)}>
        <UserAvatar
          fill="white"
          width="30px"
          className={!toggle ? `${s.userIcon}` : `${s.userIconHidden}`}
        />
      </button>
    </div>
  );
}

export default NavBar;
