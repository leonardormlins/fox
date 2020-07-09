import React, { useContext } from 'react';
import StoreContext from './Store/Context';
import axios from 'axios';
import './Styles/ProfileBar.css';


const ProfileBar = (user) => {
  console.log('profilebar?: ', user.props)
  const { token, username } = useContext(StoreContext)


  function handleFollow() {
    const config = { headers: { Authorization: `Bearer ${token}` } }
    const bodyParameter = { "name": username };
    axios.post('user/follow/'+user.props.name,bodyParameter, config)
  }
  
  if(user.props.name !== undefined) { 
    return (
      <div className="Profile-bar">
        <div className="Content-box">
          
          <div className="Top-box">
            <div>  
                <img className="Avatar-card" src={user.props.profilePhoto} alt="pic"></img>
            </div>
            <span className="Username-card">{user.props.name}</span> 
          </div>
          {user.props.name === username ? 
          null : (<div onClick={handleFollow} className="Follow-button">Follow</div>)}

        </div>
      </div>
    );
   }
   return (<h2 className="Not-found">Not found</h2>)
  }

export default ProfileBar;
