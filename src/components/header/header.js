import React from 'react';
import {useParams} from 'react-router-dom';
import Navigation from 'components/header/navigation/navigation';
import {ReactComponent as LogoIcon} from '../../img/svg/logo.svg';
import s from './header.module.css';

function Header() {
  const params = useParams();

  return (
    <header
      className={`${s.header} ${'id' in params ? s.tranparentHeader : ''}`}
    >
      <LogoIcon fill="white" />
      <Navigation />
    </header>
  );
}

export default Header;
