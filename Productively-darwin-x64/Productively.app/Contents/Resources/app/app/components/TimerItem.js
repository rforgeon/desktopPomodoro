import React, { Component } from 'react';
import {styles} from '../styles/TimerStyle'

class TimerItem extends Component {


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
          <div style={ styles.timerTime }>{finalTime}</div>
        </div>
    );
  }
}

export default TimerItem;
