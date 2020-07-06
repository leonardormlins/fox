import React, { Component } from 'react';
import './Styles/Card.css';

class Card extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="Card">
        <div className="Content-card">
          <div className="Top-card">
            <div>
              <img className="Avatar-card" src={this.props.pp} alt="pic"></img>
            </div>
            <span className="Username-card">{this.props.username}</span>
          </div>
          <div>
            <img className="Image-post" src={this.props.media} alt="media"></img>
          </div>
          <div className="Bottom-card">
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
