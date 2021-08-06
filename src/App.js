import React, { Component } from 'react';

import { Card } from './components/fact-card';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
        fact: '',
        color: '#FFFFFF'
    }
  }

  componentDidMount() {
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(catFact => this.setState( { fact: catFact.fact } ));
  }

  getNextFact = () => {
    fetch('https://catfact.ninja/fact')
    .then(response => response.json())
    .then(catFact => this.setState( { fact: catFact.fact } ));
  }

  render() {
    return (
      <div>
        <h1> Cat Facts </h1>
        <div className="button-div">
          <button type="button" className="fact-btn" onClick={this.getNextFact}> New Fact </button>
        </div>
        <Card fact={this.state.fact} />
      </div>
    )
  }

}

export default App;

