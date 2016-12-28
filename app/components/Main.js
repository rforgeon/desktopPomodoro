import React, { Component } from 'react';
import '../App.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <h1>Pomodoro</h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default Main;
