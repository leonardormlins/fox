import React from 'react';
import './Styles/ProfileBar.css';



const AddPictureButton = (props) => {

    return (
      <div className="AddPictureButton">
        <div className="Button-add"> 
          {props.text}
        </div>
      </div>
    );
  }

export default AddPictureButton;
