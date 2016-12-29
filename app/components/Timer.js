import React, { Component } from 'react';
import TimerItem from './TimerItem';

class Timer extends Component {



  startTimer(){
    this.props.initWorkTimer()

    this.interval = setInterval( () => {
      this.props.decrementTimer(this.props.timer.currentTimer);
    }, 1000);
    this.setTimeout = setTimeout( () => {
      this.props.incrementIndex();
      if (this.props.onBreak == false){
        this.props.pauseTimer();
        this.props.setOnbreakTrue();
        this.props.initWorkTimer();
        this.props.startTimer();
        let myNotification = new Notification("Time to get to Work!", {
          body: 'Get back to changing the world! 🙌'
        })
      }

      //take a long (30min) break every 4 pomodoros
      else if (this.props.index%4 == 0){
        this.props.pauseTimer();
        this.props.setOnbreakFalse();
        this.props.initLongBreakTimer();
        this.props.startTimer();
        let myNotification = new Notification("Time for a Long Break!", {
          body: 'Enjoy yourselft. You worked hard for it! 🎊'
        })
        return "LongBreak";
      }
      //else after each pomodoro, take a short (5min) break
      else{
        this.props.pauseTimer();
        this.props.setOnbreakFalse();
        this.props.initShortBreakTimer();
        this.props.startTimer();
        let myNotification = new Notification("Time for a Short Break!", {
          body: 'Take a breather! 🎉'
        })
        return "ShortBreak";
      }
    }, this.props.timerItem[0].seconds*1000);
  }

  pauseTimer(){
    this.props.pauseTimer(this.props.timer.currentTimer);
    clearInterval(this.interval);
  }

  resetTimer(){
    console.log(this.props.timer.timerItem[id].seconds)
    var id = this.props.timer.currentTimer
    var seconds = this.props.timer.timerItem[id].seconds
    this.props.resetTimer(seconds,id);
    clearInterval(this.interval);
  }


  render() {

    return (
      <div className="Timer">

        <TimerItem class="TimerItem"
          myTimerItem={this.props.timerItem[0]}
        />

        <div style={{marginTop:50 +'px', backgroundColor:'lightblue'}}>

        <button onClick={this.startTimer.bind(this)}>Start</button>
        <button onClick={this.pauseTimer.bind(this)}>Pause</button>
        <button onClick={this.resetTimer.bind(this)}>Reset</button>
        </div>
      </div>
    );

  }
}

export default Timer;
