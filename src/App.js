import React, { Component } from 'react';
import Home from './components/Home.js';
import PersonDetail from './components/PersonDetail.js';
import {Switch, Route} from 'react-router-dom';
import './App.css';

const urlCriaturas = 'https://randomuser.me/api/?results=48';

class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
      criaturas: []
    }

    //this.getCriaturas(urlCriaturas);
  }
  componentDidMount() {
    this.getCriaturas(urlCriaturas);
  }

  getCriaturas(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          criaturas: data.results
        });
      })
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" render={ () => <Home criaturas={this.state.criaturas} /> } />
          <Route path="/person/:id" render={ props => <PersonDetail match={props.match} criaturas={this.state.criaturas} /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
