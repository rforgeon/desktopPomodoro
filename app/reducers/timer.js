//a reducer takes in two things:

//1. the action
//2. copy of current state

var defaultState = {
  currentTimer: 0
}

function timer(state = defaultState, action){

  const i = action.currentTimer;

  switch(action.type){


    case 'INIT_WORK_TIMER' :

      return {
        currentTimer: 0,
      }

    case 'INIT_SHORT_BREAK_TIMER' :

      return {
        currentTimer: 1
      }

    case 'INIT_LONG_BREAK_TIMER' :

      return {
        currentTimer: 2
      }

    default:
      return state;
  }
}

export default timer;
