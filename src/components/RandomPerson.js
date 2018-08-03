import React from "react";

class RandomPerson extends React.Component {
  render() {
    const {name, picture: {large: img}} = this.props.data; 
    return (
      <img src={img} alt={`${name.first} ${name.last}`} />
    );
  }
}

export default RandomPerson;