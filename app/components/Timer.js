import React, { Component } from 'react';
import '../App.css';

class Timer extends Component {
  render() {

    //show timer seconds as "minutes:seconds" (include leading zeros)
    var minutes = Math.floor(this.props.timer.seconds / 60);
    var clockSeconds = this.props.timer.seconds - minutes * 60;
    function str_pad_left(string,pad,length){
      return (new Array(length+1).join(pad)+string).slice(-length);
    }

    var finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(clockSeconds,'0',2);

    return (
      <div className="Timer">
        <h2>{finalTime}</h2>
        <button onClick={this.props.startTimer.bind(null,this.props.timer.seconds)}>Start</button>
      </div>
    );
  }
}

export default Timer;
