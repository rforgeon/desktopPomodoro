var workTimerItem = {
  seconds: 5,
  isRunning: false,
  cycleIndex: 0,
  id: 0
}

var shortBreakTimerItem = {
  seconds: 3,
  isRunning: false,
  cycleIndex: 0,
  id: 1
}

var longBreakTimerItem = {
  seconds: 10,
  isRunning: false,
  cycleIndex: 0,
  id: 2
}

var timer = {
  timerItems: [workTimerItem, shortBreakTimerItem, longBreakTimerItem]
}

function timerItem(state = timer.timerItems,action){
  const i = action.id;

  switch(action.type){

    case 'DECREMENT_TIMER':
      return [
        ...state.slice(0,i),
        {...state[i], seconds: --state[i].seconds, isRunning: true, cycleIndex: state[i].cycleIndex},
        ...state.slice(i + 1)
      ]

    case 'PAUSE_TIMER' :

      return [
        ...state.slice(0,i),
        {...state[i], isRunning: false, seconds: state[i].seconds, cycleIndex: state[i].cycleIndex},
        ...state.slice(i + 1)
      ]

    case 'RESET_TIMER' :

      return [
        {
          seconds: 5,
          isRunning: false,
          cycleIndex: state[0].cycleIndex,
          id: 0
        },

        {
          seconds: 3,
          isRunning: false,
          cycleIndex: state[1].cycleIndex,
          id: 1
        },
        {
          seconds: 10,
          isRunning: false,
          cycleIndex: state[2].cycleIndex,
          id: 2
        }
      ]

    case 'INCREMENT_CYCLE_INDEX':

      return [
        ...state.slice(0,i),
        {...state[i], cycleIndex: ++state[i].cycleIndex, isRunning: state[i].isRunning, seconds: state[i].seconds },
        ...state.slice(i + 1)
      ]

    // case 'SET_ONBREAK_TRUE' :
    //
    //   return [
    //     ...state.slice(0,i),
    //     {...state[i], onBreak: true },
    //     ...state.slice(i + 1),
    //   ]
    //
    //
    // case 'SET_ONBREAK_FALSE' :
    //
    // return [
    //   ...state.slice(0,i),
    //   {...state[i], onBreak: false },
    //   ...state.slice(i + 1),
    // ]

    default:
      return state;
  }
}

export default timerItem;
