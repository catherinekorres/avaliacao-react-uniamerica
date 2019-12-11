import React, { Component } from 'react';

import './styles.css';
import Logo from '../../assets/twitter-logo.png';

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="Logo do Twitter" height="25"/>
    </header>
  );
}

