//Initiate work timer
export function initWorkTimer(){
  return{
    type: "INIT_WORK_TIMER",
    
  }
}

//Initiate short break timer
export function initShortBreakTimer(){
  return{
    type: "INIT_SHORT_BREAK_TIMER",

  }
}

//Initiate long break timer
export function initLongBreakTimer(){
  return{
    type: "INIT_LONG_BREAK_TIMER",

  }
}

//reset timer
export function resetTimer(seconds,id){
  return{
    type: "RESET_TIMER",
    seconds,
    id
  }
}

//reset timer
export function pauseTimer(id){
  return{
    type: "PAUSE_TIMER",
    id
  }
}

//decrement timer
export function decrementTimer(id){
  return{
    type: "DECREMENT_TIMER",
    id
  }
}

//decrement timer
export function incrementIndex(id){
  return{
    type: "INCREMENT_INDEX",
    id
  }
}

//set onbreak to true
export function setOnbreakTrue(id){
  return{
    type: "SET_ONBREAK_TRUE",
    id
  }
}

//set onbreak to false
export function setOnbreakFalse(id){
  return{
    type: "SET_ONBREAK_FALSE",
    id
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
