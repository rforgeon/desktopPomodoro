var workTimerItem = {
  seconds: 1500,
  pomodoroIndex: 0,
  isRunning: false,
  onBreak: false,
  timerIndex: 0
}

var shortBreakTimerItem = {
  seconds: 300,
  pomodoroIndex: 0,
  isRunning: false,
  onBreak: false,
  timerIndex: 1
}

var timer = {
  timerItems: [workTimerItem, shortBreakTimerItem]
}

function timerItem(state = timer.timerItems,action){
  const i = action.timerIndex;

  switch(action.type){

    case 'DECREMENT_TIMER':
      console.log("Decrementing timer");
      console.log(state);
      console.log(state[0].seconds);

      return [
        ...state.slice(0,i),
        {...state[i], seconds: --state[i].seconds, isRunning: true},
        ...state.slice(i + 1),
      ]

    case 'PAUSE_TIMER' :

      return [
        ...state.slice(0,i),
        {...state[i], isRunning: false},
        ...state.slice(i + 1),
      ]

    case 'RESET_TIMER' :
      console.log(i)
      console.log(timer.timerItems[i].seconds)
      const defaultTime = timer.timerItems[i].seconds

      return [
        ...state.slice(0,i),
        {...state[i], isRunning: false, seconds: defaultTime },
        ...state.slice(i + 1),
      ]

    case 'INCREMENT_INDEX':

      return [
        ...state.slice(0,i),
        {...state[i], index: ++state[i].index },
        ...state.slice(i + 1),
      ]

    case 'SET_ONBREAK_TRUE' :

      return [
        ...state.slice(0,i),
        {...state[i], onBreak: true },
        ...state.slice(i + 1),
      ]


    case 'SET_ONBREAK_FALSE' :

    return [
      ...state.slice(0,i),
      {...state[i], onBreak: false },
      ...state.slice(i + 1),
    ]

    default:
      return state;
  }
}

export default timerItem;
