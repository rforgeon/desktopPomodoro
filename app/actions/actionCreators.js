//Initiate work timer
export function initWorkTimer(seconds){
  return{
    type: "INIT_WORK_TIMER",
    seconds
  }
}

//Initiate short break timer
export function initShortBreakTimer(seconds){
  return{
    type: "INIT_SHORT_BREAK_TIMER",
    seconds
  }
}

//Initiate long break timer
export function initLongBreakTimer(seconds){
  return{
    type: "INIT_LONG_BREAK_TIMER",
    seconds
  }
}

//reset timer
export function resetTimer(seconds,index){
  return{
    type: "RESET_TIMER",
    seconds,
    index
  }
}

//reset timer
export function pauseTimer(seconds,index){
  return{
    type: "PAUSE_TIMER",
    seconds,
    index
  }
}

//decrement timer
export function decrementTimer(timerIndex){
  return{
    type: "DECREMENT_TIMER",
    timerIndex
  }
}

//decrement timer
export function incrementIndex(){
  return{
    type: "INCREMENT_INDEX",
  }
}

//set onbreak to true
export function setOnbreakTrue(onBreak){
  return{
    type: "SET_ONBREAK_TRUE",
    onBreak
  }
}

//set onbreak to false
export function setOnbreakFalse(onBreak){
  return{
    type: "SET_ONBREAK_FALSE",
    onBreak
  }
}

//add item
export function addListItem(itemText){
  return{
    type: "ADD_LIST_ITEM",
    itemText,

  }
}

//mark item completed
export function toggleCompleted(itemId){
  return{
    type: "TOGGLE_COMPLETED",
    itemId,
  }
}
