//a reducer takes in two things:

//1. the action
//2. copy of current state

var defaultState = [{
  seconds: 1500,
  index: 0,
  isRunning: false
}]

function timer(state = defaultState, action){
  switch(action.type){
    case 'START_TIMER' :
    const seconds = action.seconds;

    var counter = state.seconds
    setInterval(function() {
      counter--;


        return [...state, seconds: counter]

              }

    , 1000);


    default:
      return state;
  }
}

export default timer;
