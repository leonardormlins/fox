import React, { useContext } from 'react';
import StoreContext from './Store/Context';
import { Link } from 'react-router-dom';
import logoMinor from './Styles/logoMinor.svg';
import './Styles/Home.css';

const Profile = () => {
    const { setToken } = useContext(StoreContext);

    function handleLogout() {
        return setToken('')
    }

    return (
        <div className="Home">
            <header className="Header-app">
                <div className="Minor-logo">
                    <img src={logoMinor} alt="logoMinor"/>
                </div>

                <div className="Logout-button">
                    <span className="material-icons">exit_to_app</span>
                    <div onClick={handleLogout} className="Logout-text">Logout</div>
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
