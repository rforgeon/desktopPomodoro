//a reducer takes in two things:

//1. the action
//2. copy of current state

var defaultState = {
  initTimer: false,
  currentTimer: 0,
  onBreak: false,
  totalTime: 0,
  timeSinceInit: 0
}

function timer(state = defaultState, action){

  const i = action.currentTimer;

  switch(action.type){


    case 'INIT_WORK_TIMER' :

      return {
        initTimer: true,
        currentTimer: 0,
        onBreak: false,
        totalTime: state.totalTime,
        timeSinceInit: 0
      }

    case 'INIT_SHORT_BREAK_TIMER' :

      return {
        initTimer: true,
        currentTimer: 1,
        onBreak: true,
        totalTime: state.totalTime,
        timeSinceInit: 0
      }

    case 'INIT_LONG_BREAK_TIMER' :

      return {
        initTimer: true,
        currentTimer: 2,
        onBreak: true,
        totalTime: state.totalTime,
        timeSinceInit: 0
      }

    case 'INIT_TIMER' :

      return {
        initTimer: true,
        currentTimer: 0,
        onBreak: false,
        totalTime: 0,
        timeSinceInit: 0
      }

    case 'INCREMENT_TOTAL_TIME' :

      return {
        initTimer: state.initTimer,
        currentTimer: state.currentTimer,
        onBreak: state.onBreak,
        totalTime: ++state.totalTime,
        timeSinceInit: state.timeSinceInit
      }

    case 'INCREMENT_TIME_SINCE_INIT' :

      return {
        initTimer: state.initTimer,
        currentTimer: state.currentTimer,
        onBreak: state.onBreak,
        totalTime: state.totalTime,
        timeSinceInit: ++state.timeSinceInit
      }

    case 'RESET_TOTAL_TIME' :

      return {
        initTimer: state.initTimer,
        currentTimer: state.currentTimer,
        onBreak: state.onBreak,
        totalTime: action.totalTime,
        timeSinceInit: 0
      }

    default:
      return state;
  }
}

export default timer;
