var workTimerItem = {
  seconds: 1500,
  isRunning: false,
  onBreak: false,
  index: 0,
  id: 0
}

var shortBreakTimerItem = {
  seconds: 300,
  isRunning: false,
  onBreak: false,
  index: 0,
  id: 1
}

var longBreakTimerItem = {
  seconds: 1800,
  isRunning: false,
  onBreak: false,
  index: 0,
  id: 2
}

var timer = {
  currentTimer: 0,
  initWorkTime: workTimerItem.seconds,
  initShortBreakTime: shortBreakTimerItem.seconds,
  initLongBreakTime: longBreakTimerItem.seconds,
  timerItems: [workTimerItem, shortBreakTimerItem, longBreakTimerItem]
}

function timerItem(state = timer.timerItems,action){
  const i = action.id;

  switch(action.type){

    case 'DECREMENT_TIMER':
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

      return [
        ...state.slice(0,i),
        {...state[i], isRunning: false, seconds: action.seconds },
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
