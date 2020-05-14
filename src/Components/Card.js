import React from 'react';
import './Styles/Card.css';

function Card() {
  return (
    <div className="Card">
      <div className="Content-card">
        <div className="Top-card">
          <div className="Avatar-card"></div>
          <span className="Username-card">BradPitt</span>
        </div>
        <div className="Media-card"></div>
        <div className="Bottom-card">
        <p className="Action">Like</p>
        <p className="Action">Comment</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
