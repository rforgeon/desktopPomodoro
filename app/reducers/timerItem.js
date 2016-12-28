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
  switch(action.type){
    case 'DECREMENT_TIMER':
      console.log("Decrementing timer");
      console.log(state);
      console.log(state[0].seconds);
      const i = action.timerIndex;
      return [
        ...state.slice(0,i),
        {...state[i], seconds: --state[i].seconds},
        // {
        // seconds: --state.seconds,
        // pomodoroIndex: state.pomodoroIndex,
        // isRunning: true,
        // onBreak: state.onBreak,
        // timerIndex: state.timerIndex
        // },
      ...state.slice(i + 1),
    ]

    case 'PAUSE_TIMER' :

      return {
        seconds: state.seconds,
        index: state.index,
        isRunning: false,
        OnBreak: state.onBreak
      }

    case 'RESET_TIMER' :

      return {
        seconds: defaultState.seconds,
        index: state.index,
        isRunning: false,
        OnBreak: state.onBreak
      }

    case 'INCREMENT_INDEX':

      return {
        seconds: state.seconds,
        index: ++state.index,
        isRunning: state.isRunning
      }

    case 'SET_ONBREAK_TRUE' :

      return {
        seconds: defaultState.seconds,
        index: state.index,
        isRunning: state.isRunning,
        onBreak: true
      }

    case 'SET_ONBREAK_FALSE' :

      return {
        seconds: defaultState.seconds,
        index: state.index,
        isRunning: state.isRunning,
        onBreak: false
      }

    default:
      return state;
  }
}

export default timerItem;
