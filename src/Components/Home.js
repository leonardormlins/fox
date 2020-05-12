import React from 'react';
import './Styles/Home.css';

function Home() {
  return (
    <div className="Home">
      
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
