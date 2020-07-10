import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import StoreContext from './Store/Context';
import { Link } from 'react-router-dom';
import ProfileBar from './ProfileBar';
import Card from './Card';
import AddPictureButton from './AddPictureButton';
import logoMinor from './Styles/logoMinor.svg';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import './Styles/Home.css';

const People = () => {
    const [found, setFound] = useState([]);
    const { setToken, username, token } = useContext(StoreContext);
    const config = { headers: { Authorization: `Bearer ${token}` } }

    useEffect(() => {
        axios.get('user/', config)
            .then(resp => {
                console.log('$>',resp.data)
                setFound(resp.data)
            })
            .catch(err => console.log(err))
    }, [])


    function handleLogout() {
        return setToken('')
    }

    return (
        <div className="Home">
            <header className="Header-app">
                <div className="Minor-logo">
                    <img src={logoMinor} alt="logoMinor" />
                </div>

                <div className="Logout-button">
                    <span className="material-icons">exit_to_app</span>
                    <div onClick={handleLogout} className="Logout-text">Logout</div>
                </div>

                <div className="Header-line"></div>
            </header>
            <div className="Space-top"></div>

            {found ? found.map(user => <ProfileBar props={user} /> ) : null}

            <div className="Space"></div>
            <section className="Navbar">
                <div className="Options">
                    <Link to='/'>
                        <span className="material-icons md-light">home</span>
                        <div className="Icon-info">Home</div>
                    </Link>
                    <Link to='/search'>
                        <span className="material-icons md-light">search</span>
                        <div>Search</div>
                    </Link>
                    <Link to='/people'>
                        <span className="material-icons md-light">people</span>
                        <div>People</div>
                    </Link>
                    <Link to='/profile'>
                        <span className="material-icons md-light">person</span>
                        <div>Profile</div>
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default People;
