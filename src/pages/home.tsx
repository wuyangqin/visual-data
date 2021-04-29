import React from 'react';
import './home.scss';
import headerBg from '../static/images/header.png'

export const Home = () => {
  return (
    <div>
      <div className="home">
          <header style={{backgroundImage:`url(${headerBg})`}}></header>
      </div>
    </div>
  );
};
