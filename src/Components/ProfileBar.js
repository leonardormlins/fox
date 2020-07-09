import React from 'react';
import './Styles/ProfileBar.css';



const ProfileBar = (user) => {
  console.log('profilebar?: ', user)

    return (
      <div className="Profile-bar">
        <div className="Content-box">
          <div className="Top-box">
            <div>  
                <img className="Avatar-card" src={user.props.profilePhoto} alt="pic"></img>
            </div>
              <span className="Username-card">{user.props.name}</span> 
          </div>
        </div>
      </div>
    );
  }

export default ProfileBar;
