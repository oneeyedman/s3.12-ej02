import React from "react";
import './RandomPerson.css';

class RandomPerson extends React.Component {
  render() {
    const {name, picture: {large: img}} = this.props.data; 
    return (
      <div className="random-person__card" style={{backgroundImage: `url(${img})`}}>
        <img src={img} alt={`${name.first} ${name.last}`} className="random-person__card-image" />
      </div>
    );
  }
}

export default RandomPerson;