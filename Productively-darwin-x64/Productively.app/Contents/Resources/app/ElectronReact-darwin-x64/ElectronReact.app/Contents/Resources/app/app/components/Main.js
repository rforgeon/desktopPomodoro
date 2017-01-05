import React, { Component } from 'react';
import '../App.css';
import {styles} from '../styles/TimerStyle'

class Main extends Component {
  render() {
    return (
        <div style={styles.mainHight} className="Main">
          {React.cloneElement(this.props.children, this.props)}
        </div>
    );
  }
}

export default Main;
