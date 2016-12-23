import React, { Component } from 'react';
import '../App.css';

class Timer extends Component {

  startTimer(){
    this.interval = setInterval( () => {
      console.log(this.props.timer)
      this.props.decrementTimer();
    }, 1000);
  }

  pauseTimer(){
    this.props.pauseTimer();
    clearInterval(this.interval);
  }

  resetTimer(){
    this.props.resetTimer();
    clearInterval(this.interval);
  }

  checkCycle(){
    if (this.props.timer.seconds < 0){
      this.props.incrementPomodoro();
      //take a long (30min) break every 4 pomodoros
      if (this.props.timer.index%4 == 0){
        this.pauseTimer();
        this.props.initLongBreakTimer();
        this.startTimer();
        return "LongBreak";
      }
      //else after each pomodoro, take a short (5min) break
      else{
        this.pauseTimer();
        this.props.initShortBreakTimer();
        this.startTimer();
        return "ShortBreak";
      }
    }
  }

  render() {

    //show timer seconds as "minutes:seconds" (include leading zeros)
    var minutes = Math.floor(this.props.timer.seconds / 60);
    var clockSeconds = this.props.timer.seconds - minutes * 60;
    function str_pad_left(string,pad,length){
      return (new Array(length+1).join(pad)+string).slice(-length);
    }


    var finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(clockSeconds,'0',2);

    var currentCycle = this.checkCycle();
    console.log(currentCycle);

    return (
      <div className="Timer">
        <h2>{finalTime}</h2>
        <button onClick={this.startTimer.bind(this)}>Start</button>
        <button onClick={this.pauseTimer.bind(this)}>Pause</button>
        <button onClick={this.resetTimer.bind(this)}>Reset</button>
      </div>
    );
  }
}

export default Timer;
