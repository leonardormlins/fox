import React, { useState, useContext, useEffect } from 'react';
import StoreContext from './Store/Context';
import { Link } from 'react-router-dom';
import axios from 'axios';
import logoMinor from './Styles/logoMinor.svg';
import Card from './Card';
import './Styles/Home.css';

const Home = () => {
  const [following, setFollowing] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const { setToken, username } = useContext(StoreContext);

  useEffect(()=> {
    axios.get('user/followed/'+ username)
    .then(resp=> {
      setFollowing(resp.data)
    });
  },[])

  useEffect(() => {
    
    following.map( user => {
      axios.get('post/user/'+user.name)
      .then(resp => {
        setAllPosts(oldArray => [...oldArray, resp.data])
      })
    }) 
    
  },[following])

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

      { allPosts.length === 0 ? (<h2 className="Not-found">No posts, you need to follow someone</h2>) : null}
      {allPosts.map(array => array.map( post => <Card key={post.pictureLink} username={post.author.name} pp={post.author.profilePhoto} media={post.pictureLink}/>))}
      
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
