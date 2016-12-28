//a reducer takes in two things:

//1. the action
//2. copy of current state

var defaultState = {
  timerItems: [
    {
      seconds: 5,
      index: 0,
      isRunning: false,
      onBreak: true
    }
  ]
}

function Timer(state = defaultState.timerItems, action){
  switch(action.type){


    case 'INIT_WORK_TIMER' :

      return {
        seconds: defaultState.seconds,
        index: state.index,
        isRunning: state.isRunning,
        onBreak: state.onBreak
      }

    case 'INIT_SHORT_BREAK_TIMER' :

      return {
        seconds: 3,
        index: state.index,
        isRunning: state.isRunning,
        onBreak: state.onBreak
      }

    case 'INIT_LONG_BREAK_TIMER' :

      return {
        seconds: 1800,
        index: state.index,
        isRunning: state.isRunning,
        onBreak: state.onBreak
      }



    default:
      return state;
  }
}

export default Timer;
