import React, { Component } from 'react';
import TimerItem from './TimerItem';

class Timer extends Component {

  initTimer(){
    if (!this.props.timer.initTimer){
      this.props.initTimer();
    }
  }

  startTimer(){
    //decrement timer every second
    this.interval = setInterval( () => {
      this.props.decrementTimer(this.props.timer.currentTimer);
    }, 1000);
    //once timer ends:
    this.timeout = setTimeout( () => {

        //increment the last timer's index
        console.log("currentTimerID: ",this.props.timer.currentTimer)
        this.props.incrementCycleIndex(this.props.timer.currentTimer);
        console.log("index",this.props.timerItem[0].cycleIndex)

        //if the work timer had run for 4 cycles, run long break
        if (this.props.timerItem[0].cycleIndex%4 == 0){
          this.resetTimer();
          this.props.initLongBreakTimer();
          this.startTimer();
          let myNotification = new Notification("Time for a Long Break!", {
            body: 'Enjoy yourselft. You worked hard for it! 🎊'
          })
        }
        //else after each pomodoro, take a short (5min) break
        else if (!this.props.timer.onBreak){
          this.resetTimer();
          this.props.initShortBreakTimer();
          this.startTimer();
          let myNotification = new Notification("Time for a Short Break!", {
            body: 'Take a breather! 🎉'
          })
        }
        //if just on a break, start work timer
        else{
          this.resetTimer();
          this.props.initWorkTimer();
          this.startTimer();
          let myNotification = new Notification("Time to Work!", {
            body: 'Get back to changing the world! 🙌'
          })
        }

    }, this.props.timerItem[this.props.timer.currentTimer].seconds*1000);

  }

  pauseTimer(){
    this.props.pauseTimer(this.props.timer.currentTimer);
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }

  resetTimer(){
    this.props.resetTimer();
    clearInterval(this.interval);
    clearTimeout(this.timeout);
  }


  render() {

    this.initTimer();

    return (
      <div className="Timer">

        <TimerItem class="TimerItem"
          myTimerItem={this.props.timerItem[this.props.timer.currentTimer]}
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
