import React from "react";
import {Link} from 'react-router-dom';
import './PersonDetail.css';


class PersonDetail extends React.Component {
  makeDummies(total, id, img) {
    const dummies = [];
    
    for (let i=0; i<= (total); i++) {
      dummies.push(<div className="random-detail__dummy" key={i} style={{backgroundImage: `url(${img})`}}></div>);
    }
    return dummies;
  }
  render() {
    const offset = 12;
    const personId = parseInt(this.props.match.params.id, 10);
    const criaturas = this.props.criaturas;
    
    if (criaturas.length >= 1) {
      const imgPath = criaturas[personId].picture.large;
      const name = `${criaturas[personId].name.first} ${criaturas[personId].name.last}`;
      const age = criaturas[personId].dob.age;
      const location = `${criaturas[personId].location.city}, ${criaturas[personId].location.state}`;

      return (
        <section className="random-detail">
          {this.makeDummies(criaturas.length-offset, personId, imgPath)}
          <Link to="/" className="random-detail__back-btn">Volver al listado</Link>
          <div className="random-detail__picture" style={{backgroundImage: `url(${imgPath})`}}>
            <img src={imgPath} alt={name} className="random-detail__picture-item"/>
          </div>
          <div className="random-detail__info">
            <h2 className="random-detail__name">{name} <small className="random-detail__age" >({age})</small></h2>
            <div className="random-detail__location">{location}</div>
          </div>
        </section>
      );
    } else {
      return <p>?</p>
    }
  }
}

export default PersonDetail;