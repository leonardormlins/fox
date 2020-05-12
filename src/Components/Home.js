import React from 'react';
import './Styles/Home.css';

function Home() {
  return (
    <div className="Home">
      <section className="Navbar">
        <div className="Options">
          <span className="material-icons md-light">home</span>
          <span className="material-icons md-light">search</span>
          <span className="material-icons md-light">people</span>
          <span className="material-icons md-light">person</span>
        </div>
      </section>
    </div>
  );
}

export default Home;
