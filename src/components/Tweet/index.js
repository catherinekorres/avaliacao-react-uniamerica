import React from 'react';

import Avatar from '../Avatar';

import './styles.css';

export default function Tweet({ text }) {
  return (
    <div className="tweet">
      <Avatar width="60" />

      <div className="content">
        <div className="user">
          <h4>Catherine</h4>
          <span>@catherinekorres</span>
        </div>
        <div className="text">
          {text}
        </div>
      </div>

    </div>
  );
}
