import React, { Component } from 'react';
import '../App.css';

class TimerItem extends Component {

  startTimer(){
    this.interval = setInterval( () => {

      this.props.decrementTimer(this.props.myTimerItem.id);
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
    }, this.props.myTimerItem.seconds*1000);
  }

  pauseTimer(){
    this.props.pauseTimer(this.props.myTimerItem.id);
    clearInterval(this.interval);
  }

  resetTimer(){
    var id = this.props.myTimerItem.id
    var seconds = this.props.timer.timerItems[id].seconds
    this.props.resetTimer(seconds,id);
    clearInterval(this.interval);
  }


  render() {

    //show timer seconds as "minutes:seconds" (include leading zeros)
    var minutes = Math.floor(this.props.myTimerItem.seconds / 60);
    var clockSeconds = this.props.myTimerItem.seconds  - minutes * 60;
    function str_pad_left(string,pad,length){
      return (new Array(length+1).join(pad)+string).slice(-length);
    }


    var finalTime = str_pad_left(minutes,'0',2)+':'+str_pad_left(clockSeconds,'0',2);




    return (
      <div className="TimerItem">
        <h2>{finalTime}</h2>
      </div>
    );
  }
}

export default TimerItem;
