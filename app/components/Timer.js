import React, { Component } from 'react';
import TimerItem from './TimerItem';
import CircleTimer from 'circle-timer';
import {styles} from '../styles/TimerStyle';
var pause  = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAYAAABWMrcvAAAAAXNSR0IArs4c6QAAAJ1JREFUOBFjbHzwyvP/P8ZZjIz/Bf//Z5zZoCRazIAGGu697gXKpwPl3zMy/U9jBAo8ZmD4LwNTx8LIbFmjKHwCxm968Nby37+/x2B8BgbGJ0zIGkASf///lUUoAMr++ws3ECL+XwaoiXQwqgkaZqMBMbwDgvEJcuZgZmQGZkoEQOeDMyEo+4IYjIwMX4F0H3KuBWmF8Bn7oPJPQOoBgF02fe2CbA8AAAAASUVORK5CYII=";
var play = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAIlJREFUOBGt07sNgDAMBFAbsQIDsAmLISVisbAI9GQIEEWiSPk5tt2crnm6xmBv747bb6B4aK7n/T1EPCcAs6+Lk/oRDZAGnqEaeBWV4F2Ug5PREXwYpeBstIWL0RKuhia4nUORZvo0YjTFwjA2WsLYaAsbRikYGR3BuigHq6ISLEM1sIhqYgH9ABlmWtA1gEGBAAAAAElFTkSuQmCC";
var refresh = "https://cldup.com/5tqmi1vMp0.png";
var sunset = "https://cldup.com/cr433m5Fpx.png";
var sunrise = "https://cldup.com/da1gL9t3JG.png";


class Timer extends Component {


  initTimer(){
    if (!this.props.timer.initTimer){
      this.props.initTimer();
    }
  }

  startTimer(){
    document.getElementById("playPause").src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAUCAYAAABWMrcvAAAAAXNSR0IArs4c6QAAAJ1JREFUOBFjbHzwyvP/P8ZZjIz/Bf//Z5zZoCRazIAGGu697gXKpwPl3zMy/U9jBAo8ZmD4LwNTx8LIbFmjKHwCxm968Nby37+/x2B8BgbGJ0zIGkASf///lUUoAMr++ws3ECL+XwaoiXQwqgkaZqMBMbwDgvEJcuZgZmQGZkoEQOeDMyEo+4IYjIwMX4F0H3KuBWmF8Bn7oPJPQOoBgF02fe2CbA8AAAAASUVORK5CYII=";
    document.getElementById("playPauseOnClick").onclick=this.pauseTimer.bind(this);
    //start timer circle
    this.circleTimer.startTimer();
    //decrement timer every second
    this.interval = setInterval( () => {
      this.props.decrementTimer(this.props.timer.currentTimer);
      this.props.incrementTotalTime();
      this.props.incrementTimeSinceInit();
    }, 1000);
    //once timer ends:
    this.timeout = setTimeout( () => {

        //increment the last timer's index
        this.props.incrementCycleIndex(this.props.timer.currentTimer);
        //update bottom timeline
        this.setTimelineStatus();
        //if just on a break, start work timer
        if (this.props.timer.onBreak){
          this.circleTimer.pauseTimer();
          this.circleTimer.updateTimer({ circleDuration: 1500, timerDuration: 1500});
          this.props.initWorkTimer();
          this.resetTimer();
          this.startTimer();
          let myNotification = new Notification("Time to Work!", {
            body: 'Get back to changing the world! 🙌'
          })
        }

        //else after each pomodoro, take a short (5min) break
        else if (!this.props.timer.onBreak && this.props.timerItem[0].cycleIndex%4 != 0){
          this.circleTimer.pauseTimer();
          this.circleTimer.updateTimer({ circleDuration: 300, timerDuration: 300});
          this.props.initShortBreakTimer();
          this.resetTimer();
          this.startTimer();
          let myNotification = new Notification("Time for a Short Break!", {
            body: 'Take a breather! 🎉'
          })
        }
        //if the work timer had run for 4 cycles, run long break
        else if (this.props.timerItem[0].cycleIndex%4 == 0){
          this.circleTimer.pauseTimer();
          this.circleTimer.updateTimer({ circleDuration: 1800, timerDuration: 1800});
          this.props.initLongBreakTimer();
          this.resetTimer();
          this.startTimer();
          let myNotification = new Notification("Time for a Long Break!", {
            body: 'Enjoy yourselft. You worked hard for it! 🎊'
          })
        }

    }, this.props.timerItem[this.props.timer.currentTimer].seconds*1000);

  }

  pauseTimer(){
    this.props.pauseTimer(this.props.timer.currentTimer);
    this.circleTimer.pauseTimer();
    clearInterval(this.interval);
    clearTimeout(this.timeout);
    document.getElementById("playPause").src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAIlJREFUOBGt07sNgDAMBFAbsQIDsAmLISVisbAI9GQIEEWiSPk5tt2crnm6xmBv747bb6B4aK7n/T1EPCcAs6+Lk/oRDZAGnqEaeBWV4F2Ug5PREXwYpeBstIWL0RKuhia4nUORZvo0YjTFwjA2WsLYaAsbRikYGR3BuigHq6ISLEM1sIhqYgH9ABlmWtA1gEGBAAAAAElFTkSuQmCC";
    document.getElementById("playPauseOnClick").onclick=this.startTimer.bind(this);
  }

  resetTimer(){
    this.props.resetTimer();
    clearInterval(this.interval);
    clearTimeout(this.timeout);
    this.circleTimer.pauseTimer();
    console.log(this.props.timer.currentTimer)
    switch(this.props.timer.currentTimer){
      //on work timer
      case 0:
        this.circleTimer.updateTimer({ circleDuration: 1500, timerDuration: 1500});
        break;
      //on short break timer
      case 1:
        this.circleTimer.updateTimer({ circleDuration: 300, timerDuration: 300});
        break;
      //on long break timer
      case 2:
        this.circleTimer.updateTimer({ circleDuration: 1800, timerDuration: 1800});
        break;
    }
  }
  resetOnClick(){
    this.resetTimer();
    var seconds = this.props.timer.totalTime-this.props.timer.timeSinceInit
    this.props.resetTotalTime(seconds);
    document.getElementById("playPause").src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAIlJREFUOBGt07sNgDAMBFAbsQIDsAmLISVisbAI9GQIEEWiSPk5tt2crnm6xmBv747bb6B4aK7n/T1EPCcAs6+Lk/oRDZAGnqEaeBWV4F2Ug5PREXwYpeBstIWL0RKuhia4nUORZvo0YjTFwjA2WsLYaAsbRikYGR3BuigHq6ISLEM1sIhqYgH9ABlmWtA1gEGBAAAAAElFTkSuQmCC";
    document.getElementById("playPauseOnClick").onclick=this.startTimer.bind(this);
  }


  componentDidMount(){
   document.getElementById("playPauseOnClick").onclick=this.startTimer.bind(this);
   this.formatTimeline();

   var element = document.getElementById('circle-timer');
   this.circleTimer = new CircleTimer({
     rootElement: element,
     thickness: '7',
     radius: '95',
     units: 'px',
     circleDuration: 1500,
     timerDuration: 1500,
     color: '#80DEEA',
     backgroundRingColor: '#37474F',
   })
  }

  setTimelineStatus(){
    var timelineDots = document.getElementsByClassName('timelineDot');
    var timelineRecs = document.getElementsByClassName('timelineRec');

    //set glow on work circles
    for (var i = 0 ; i < this.props.timerItem[0].cycleIndex; i++){
      if (timelineDots[i] != undefined){
        var thisDot = timelineDots[i].getElementsByTagName('div')[0];
        thisDot.style.border = 1+'px'+ ' solid ' +' #80DEEA';
        thisDot.style.boxShadow = 0+'px '+ 2+'px '+ 1+'px '+ 0+'px '+ 'rgba('+0+','+0+','+0+','+0.50+'),'+ 0+'px '+ 3+'px '+ 4+'px '+ 0+'px '+ 'rgba('+128+','+221+','+234+','+0.50+')';
      }
    }
    //set glow on long break rectangles
    for (var i = 0 ; i < this.props.timerItem[2].cycleIndex ; i++){
      if (timelineRecs[i] != undefined){
        var thisRec = timelineRecs[i].getElementsByTagName('div')[0];
        thisRec.style.background = '#80DEEA';
        thisRec.style.boxShadow = 0+'px '+ 2+'px '+ 1+'px '+ 0+'px '+ 'rgba('+0+','+0+','+0+','+0.50+'),'+ 0+'px '+ 3+'px '+ 4+'px '+ 0+'px '+ 'rgba('+128+','+221+','+234+','+0.50+')';
      }
    }
  }

  setCurrentStatus(){
    switch(this.props.timer.currentTimer){
      //on work timer
      case 0:
        return 'Working';
      //on short break timer
      case 1:
        return "Short Break"
      //on long break timer
      case 2:
        return "Long Break"
    }
  }

  formatTimeline(){

    var timelineDots = document.getElementsByClassName('timelineDot');
    var timelineRecs = document.getElementsByClassName('timelineRec');

    //set work dots
    for (var i=0; i<timelineDots.length/4; i++){
      var j = Math.cos( (i/timelineDots.length*1.4) * Math.PI + (Math.PI*1.33));
      timelineDots[i].getElementsByTagName('div')[0].style.bottom = j*13+17+'%';
    }
    for (var i=timelineDots.length/4; i< timelineDots.length/4 *2; i++){
       j = Math.cos( (i/timelineDots.length*1.4) * Math.PI + (Math.PI*1.33));
      timelineDots[i].getElementsByTagName('div')[0].style.bottom = j*12+17+'%';
    }
    for (var i=timelineDots.length/4 *2; i<timelineDots.length/4 *3; i++){
       j = Math.cos( (i/timelineDots.length*1.45) * Math.PI + (Math.PI*1.33));
      timelineDots[i].getElementsByTagName('div')[0].style.bottom = j*12+17+'%';
    }
    for (var i=timelineDots.length/4 *3; i< timelineDots.length/4 *4; i++){
       j = Math.cos( (i/timelineDots.length*1.44) * Math.PI + (Math.PI*1.33));
      timelineDots[i].getElementsByTagName('div')[0].style.bottom = j*13.5+17+'%';
    }

    //set break rectangles
    for (var i=0; i<timelineRecs.length; i++){
      var n = (i+1)%2
      if (n == 0){
        n = -15
      }
      else{
        n = 10
      }
      timelineRecs[i].getElementsByTagName('div')[0].style.marginTop = n+'px';
    }
  }

  pluralize(word,num){
    if(num > 1){
      return word+'s';
    }
    else{
      return word
    }
  }

  render() {

    this.initTimer();

    //show total timer seconds as hours and minutes
    var time = this.props.timer.totalTime;
    var hours = Math.floor(time / 3600);
    time = time - hours * 3600;
    var minutes =  Math.floor(time / 60);


    return (
        <div className="Timer">

        <div style={styles.topRow}>
          <div style={ styles.circle } id="circle-timer"></div>
          <div style={ styles.timeSpacing }>
            <TimerItem  class="TimerItem"
              myTimerItem={this.props.timerItem[this.props.timer.currentTimer]}
            />
          </div>
          <div id="playPauseOnClick" style={styles.playPauseButton}>
            <img id="playPause" style={ styles.playIcon } src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAIlJREFUOBGt07sNgDAMBFAbsQIDsAmLISVisbAI9GQIEEWiSPk5tt2crnm6xmBv747bb6B4aK7n/T1EPCcAs6+Lk/oRDZAGnqEaeBWV4F2Ug5PREXwYpeBstIWL0RKuhia4nUORZvo0YjTFwjA2WsLYaAsbRikYGR3BuigHq6ISLEM1sIhqYgH9ABlmWtA1gEGBAAAAAElFTkSuQmCC"></img>
          </div>
          <div onClick={this.resetOnClick.bind(this)} style={styles.resetButton}>
            <img style={ styles.refreshIcon } src={refresh}></img>
          </div>

        </div>
        <div style={ styles.bottomBackground }>
          <div style={ styles.col1 }></div>
          <div className="timelineDot" id="work1" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div className="timelineDot" id="work2" style={ styles.col1 }><div style={ styles.workSessionCircle } ></div></div>
          <div className="timelineDot" id="work3" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div className="timelineDot" id="work4" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div className="timelineRec" id="longBreak1" style={ styles.col1 }><div style={ styles.breakSessionRec }></div></div>
          <div className="timelineDot" id="work5" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div className="timelineDot" id="work6" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div className="timelineDot" id="work7" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div className="timelineDot" id="work8" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div className="timelineRec" id="longBreak2" style={ styles.col1 }><div style={ styles.breakSessionRec }></div></div>
          <div className="timelineDot" id="work9" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div className="timelineDot" id="work10" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div className="timelineDot" id="work11" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div className="timelineDot" id="work12" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div className="timelineRec" id="longBreak3" style={ styles.col1 }><div style={ styles.breakSessionRec }></div></div>
          <div className="timelineDot" id="work13" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div className="timelineDot" id="work14" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div className="timelineDot" id="work15" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div className="timelineDot" id="work16" style={ styles.col1 }><div style={ styles.workSessionCircle }></div></div>
          <div style={ styles.col1 }></div>


          <div style={ styles.total }>Total:</div>

          <div style={ styles.totalHrsText }>{this.pluralize('hr',hours)}</div>
          <div style={ styles.currentTotalHrs }>{hours}</div>

          <div style={ styles.totalMinsText }>{this.pluralize('min',minutes)}</div>
          <div style={ styles.currentTotalMins }>{minutes}</div>



          <div style={ styles.statusText }>Status:</div>
          <div style={ styles.currentStatus }>{this.setCurrentStatus()}</div>

          <div style={ styles.col3 }>  <img style={ styles.sunrise } src={sunrise}></img> </div>
          <div style={ styles.col3 }>  <img style={ styles.sunset } src={sunset}></img> </div>

        </div>
        </div>


    );

  }
}

export default Timer;
