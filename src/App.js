import React, { Component } from "react";
import Home from "./components/Home.js";
import PersonDetail from "./components/PersonDetail.js";
import { Switch, Route } from "react-router-dom";
import "./App.css";

const urlCriaturas = "https://randomuser.me/api/?results=48";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      criaturas: []
    };
  }

  componentDidMount() {
    this.loadData(urlCriaturas);
  }

  getCriaturas(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.saveData(data.results);
        this.setState({
          criaturas: data.results
        });
      });
  }

  loadData(url) {
    if (localStorage.getItem("randomPersons") === null) {
      this.getCriaturas(url);
    } else {
      const criaturas = JSON.parse(localStorage.getItem("randomPersons"));
      this.setState({
        criaturas: criaturas
      });
    }
  }

  saveData(personData) {
    const criaturas = JSON.stringify(personData);
    localStorage.setItem("randomPersons", criaturas);
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home criaturas={this.state.criaturas} />}
          />
          <Route
            path="/person/:id"
            render={props => (
              <PersonDetail
                match={props.match}
                criaturas={this.state.criaturas}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
