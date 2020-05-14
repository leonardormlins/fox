import React from 'react';
import logoMinor from './Styles/logoMinor.svg';
import Card from './Card';
import './Styles/Home.css';

function Home() {
  return (
    <div className="Home">
      <header className="Header-app">
        <div className="Minor-logo">
          <img src={logoMinor} alt="logoMinor"/>
        </div>

        <div className="Header-line"></div>
      </header>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <div className="Space"></div>
      <section className="Navbar">
        <div className="Options">
          <div>
            <span className="material-icons md-light">home</span>
            <div className="Icon-info">Home</div>
          </div>
          <div>
            <span className="material-icons md-light">search</span>
            <div>Search</div>
          </div>
          <div>
            <span className="material-icons md-light">people</span>
            <div>People</div>
          </div>
          <div>
            <span className="material-icons md-light">person</span>
            <div>Profile</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
