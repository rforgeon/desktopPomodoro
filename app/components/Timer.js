import React, { Component } from 'react';
import TimerItem from './TimerItem';

class Timer extends Component {

  render() {

    return (
      <div className="Timer">
        {this.props.timer.timerItems.map((myTimerItem,timerIndex)=> <TimerItem {...this.props}
                    key={timerIndex}
                    index={timerIndex}
                    myTimerItem={myTimerItem}
                    />)}
      </div>
    );
  }
}

export default Timer;
