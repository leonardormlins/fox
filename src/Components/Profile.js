import React from 'react';
import { Link } from 'react-router-dom';
import logoMinor from './Styles/logoMinor.svg';
import './Styles/Home.css';

const Profile = () => {

    return (
        <div className="Home">
            <header className="Header-app">
                <div className="Minor-logo">
                    <img src={logoMinor} alt="logoMinor"/>
                </div>

                <div className="Header-line"></div>
            </header>
            <div className="Space-top"></div>

            <div className="Space"></div>
            <section className="Navbar">
            <div className="Options">
                <Link to='/'>
                    <span className="material-icons md-light">home</span>
                    <div className="Icon-info">Home</div>
                </Link>
                <div>
                    <span className="material-icons md-light">search</span>
                    <div>Search</div>
                </div>
                <div>
                    <span className="material-icons md-light">people</span>
                    <div>Profile</div>
                </div>
                <Link to='/profile'>
                    <span className="material-icons md-light">person</span>
                    <div>Profile</div>
                </Link>
            </div>
            </section>
        </div>
    );
}

export default Profile;
