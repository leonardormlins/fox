import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoMinor from './Styles/logoMinor.svg';
import Card from './Card';
import './Styles/Home.css';

function initialState() {
  return {
    posts: [
      {
        author: 'TomCruise',
        profilePic: 'https://i0.statig.com.br/fw/bf/zg/6g/bfzg6g6jxku7c44lrgi56gv1o.jpg',
        media: 'https://buzzwonder.com/wp-content/uploads/2020/05/tom-cruise-movies-min-350x350.jpg' 
      },
      {
        author: 'ArnoldSchwarzenegger',
        profilePic: 'https://avatarfiles.alphacoders.com/192/192704.jpg',
        media: 'https://avatarfiles.alphacoders.com/192/192704.jpg' 
      },
      {
        author: 'TerryCrews',
        profilePic: 'https://pbs.twimg.com/media/EAMHds8XkAEMldD.jpg',
        media: 'https://miro.medium.com/max/2800/0*dLqBUa9FAsP_9Ivy.jpg' 
      },
      {
        author: 'BradPitt',
        profilePic: 'https://medias.fashionnetwork.com/image/upload/v1/medias/ab4a10f7679ea2c38819c8c900904f2b2943745.jpg',
        media: 'https://media1.popsugar-assets.com/files/thumbor/4UYUg9UKWqqhaFfElFDU9bKMRgQ/356x1145:1857x2646/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/970/n/1922398/cc3fa7b15d70381d55bd82.88203803_/i/Brad-Pitt.jpg' 
      }
    ]
  }
}

const Home = () => {
  const [values] = useState(initialState);

  return (
    <div className="Home">
      <header className="Header-app">
        <div className="Minor-logo">
          <img src={logoMinor} alt="logoMinor"/>
        </div>

        <div className="Header-line"></div>
      </header>
      <div className="Space-top"></div>

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
