import React from 'react';

import './styles.css';

import Avatar from '../Avatar';

import Place from '../../assets/place.svg';
import URL from '../../assets/url.svg';
import Joined from '../../assets/joined.svg';
import Birth from '../../assets/birth.svg';

export default function UserInfo() {
  return (
    <div className="wrapper">
      <div style={{ marginTop: '-80px', marginLeft: '50px'}}>
        <Avatar width="150"/>
      </div>

      <div className="info">
        <h1>Catherine</h1>
        <span>@catherinekorres</span>
        <p>22yo. cat person. web developer  👩🏻‍💻 ⚛✨</p>

        <ul>
          <li><img src={Place} height="20" alt="Place" /> Foz do Iguaçu, Paraná</li>
          <li><img src={URL} height="20" alt="URL" /><a href="https://github.com/catherinekorres">github.com/catherinekorres</a></li>
          <li><img src={Joined} height="20" alt="Joined" />Joined July 2017</li>
          <li><img src={Birth} height="20" alt="Birth" />Born the 14th of March 1997</li>
        </ul>
      </div>

    </div>
  );
}
