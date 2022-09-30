import React from 'react';
import {useSelector} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {permission} from 'store/selectors/user_selector';
import NavBar from './nav_bar/nav_bar';
import s from './navigation.module.css';

function Navigation() {
  const isLogin = useSelector(permission);

  return (
    <>
      <nav className={s.navigation}>
        <li className={s.navItem}>
          <NavLink to="/" className={s.link}>
            Home
          </NavLink>
        </li>
        <li className={s.navItem}>
          <NavLink to="/dragons" className={s.link}>
            All dragons
          </NavLink>
        </li>
      </nav>
      {!isLogin ? (
        <div className={s.authDiv}>
          <NavLink to="/registration" className={s.authLink}>
            Sign Up
          </NavLink>
          <NavLink to="/login" className={s.authLink}>
            Sign In
          </NavLink>
        </div>
      ) : (
        <NavBar />
      )}
    </>
  );
}

export default Navigation;
