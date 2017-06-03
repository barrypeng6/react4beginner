import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    }
  }

  randomNum() {
    let rand = Math.floor((Math.random() * 10) + 1);
    this.setState({
      num: rand
    });
  }

  render() {
    return (
      <div>
        <div>{this.state.num}</div>
        <button onClick={this.randomNum.bind(this)}>click</button>
      </div>
    );
  }
}

export default App;
