import React from 'react';
import './Styles/Card.css';

class Card extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="Card">
        <div className="Content-card">
          <div className="Top-card">
            <div>
              <img className="Avatar-card" src={this.props.pp}></img>
            </div>
            <span className="Username-card">{this.props.username}</span>
          </div>
          <div>
            <img className="Image-post" src={this.props.media}></img>
          </div>
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
