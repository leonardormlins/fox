import React, { useState, useContext } from 'react';
import StoreContext from './Store/Context';
import { Link } from 'react-router-dom';
import ProfileBar from './ProfileBar';
import Card from './Card';
import AddPictureButton from './AddPictureButton';
import logoMinor from './Styles/logoMinor.svg';
import './Styles/Home.css';

function initialState() {
    return {
        username: 'Leo',
        picture: 'https://pbs.twimg.com/media/EAMHds8XkAEMldD.jpg',
        numbersOfFollowers: 15,
        numbersOfFollowing: 4,
        posts: [
            {
              author: 'Leo',
              profilePic: 'https://pbs.twimg.com/media/EAMHds8XkAEMldD.jpg',
              media: 'https://pbs.twimg.com/media/EAMHds8XkAEMldD.jpg' 
            },
          ]
    }
}

const Profile = () => {
    const [ values ] = useState(initialState);
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

            <ProfileBar props={values}/>
            <div className="NumberOfFollowers">
                Followers: {values.numbersOfFollowers} | Following: {values.numbersOfFollowing}
            </div>
            
            <AddPictureButton/>
            {false ? <p className="No-posts">Não existem publicações</p> : <br/>}
            {values.posts.map(post => <Card key={post.author} username={post.author} pp={post.profilePic} media={post.media}/>)}

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
                    <div>People</div>
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
