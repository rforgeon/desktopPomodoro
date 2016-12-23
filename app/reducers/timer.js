//a reducer takes in two things:

//1. the action
//2. copy of current state

var defaultState = {
  seconds: 3,
  index: 0,
  isRunning: false
}

function timer(state = defaultState, action){
  switch(action.type){
    case 'INIT_WORK_TIMER' :

      return {
        seconds: action.seconds,
        index: state.index,
        isRunning: state.isRunning
      }

    case 'INIT_SHORT_BREAK_TIMER' :

      return {
        seconds: 300,
        index: state.index,
        isRunning: state.isRunning
      }

    case 'INIT_LONG_BREAK_TIMER' :

      return {
        seconds: 1800,
        index: state.index,
        isRunning: state.isRunning
      }

    case 'DECREMENT_TIMER':

      return {
        seconds: --state.seconds,
        index: state.index,
        isRunning: true
      }

    case 'PAUSE_TIMER' :

      return {
        seconds: state.seconds,
        index: state.index,
        isRunning: false
      }

    case 'RESET_TIMER' :

      return {
        seconds: defaultState.seconds,
        index: state.index,
        isRunning: false
      }

    case 'INCREMENT_POMODORO':

      return {
        seconds: state.seconds,
        index: ++state.index,
        isRunning: state.isRunning
      }

    default:
      return state;
  }
}

export default timer;
