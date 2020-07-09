import React, { useState, useContext, useEffect } from 'react';
import StoreContext from './Store/Context';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logoMinor from './Styles/logoMinor.svg';
import Card from './Card';
import './Styles/Home.css';

function initialState() {
  return {}
}

const Home = () => {
  const [values] = useState(initialState);
  const [following, setFollowing] = useState([]);
  const [feedPosts, setFeedPosts] = useState([]);
  const { setToken, username, token } = useContext(StoreContext);

  useEffect(()=> {
    axios.get('user/followed/'+username)
    .then(resp=> setFollowing(resp.data));
  },[])

  // useEffect(()=> {
  //   following.map(user => {
  //     axios.get('post/user/'+user.name)
  //     .then(resp => {
  //       setFeedPosts(...feedPosts, resp.data)
  //     })
  //   })
    
  // },[following])

  function handleLogout(){
    return setToken('');
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

      {console.log('feedPosts:', feedPosts)}
      {feedPosts.map(post => <Card key={post.pictureLink} username={post.author.name} pp={post.author.profilePhoto} media={post.pictureLink}/>)} 
      
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
          <div>
            <span className="material-icons md-light">people</span>
            <div>People</div>
          </div>
          <Link to="/profile">
            <span className="material-icons md-light">person</span>
            <div>Profile</div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
