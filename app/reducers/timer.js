//a reducer takes in two things:

//1. the action
//2. copy of current state

var defaultState = {
  initTimer: false,
  currentTimer: 0,
  onBreak: false
}

function timer(state = defaultState, action){

  const i = action.currentTimer;

  switch(action.type){


    case 'INIT_WORK_TIMER' :

      return {
        initTimer: true,
        currentTimer: 0,
        onBreak: false
      }

    case 'INIT_SHORT_BREAK_TIMER' :

      return {
        initTimer: true,
        currentTimer: 1,
        onBreak: true
      }

    case 'INIT_LONG_BREAK_TIMER' :

      return {
        initTimer: true,
        currentTimer: 2,
        onBreak: true
      }

    case 'INIT_TIMER' :

      return {
        initTimer: true,
        currentTimer: 0,
        onBreak: false
      }

    default:
      return state;
  }
}

export default timer;
