import React from 'react';
import './Styles/Card.css';

class Card extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <div className="Card">
        <div className="Content-card">
          <div className="Top-card">
            <div className="Avatar-card"></div>
            <span className="Username-card">{this.props.username}</span>
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
}

export default Card;
