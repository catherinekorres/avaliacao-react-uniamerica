import React from 'react';

import Img from '../../assets/avatar.jpg';

import './styles.css';

export default function Avatar({ width }) {
  return (
    <img src={Img} className="avatar" width={width} alt="Avatar" />
  );
}
