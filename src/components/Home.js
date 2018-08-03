import React from "react";
import './Home.css';
import RandomPerson from './RandomPerson';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render() {
    const {criaturas} = this.props;
    if (criaturas.length >=1) {
      return (
        <ul className="random-people">
          {criaturas.map((c,i)=> {
            return (
              <li className="random-person" key={c.login.sha1}>
                <Link to={'/person/${i}'}><RandomPerson data={c} /></Link>
              </li>
            );
          })}
        </ul>
      );
    } else {
      return (
        <p className="no-results">Dónde están mis criaturas?</p>
      );
    }
  }
}

export default Home;