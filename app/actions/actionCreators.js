//start timer
export function startTimer(seconds,index){
  return{
    type: "START_TIMER",
    seconds,
    index
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

//add item
export function addItem(itemId,itemText,isCompleted){
  return{
    type: "ADD_ITEM",
    itemId,
    itemText,
    isCompleted
  }
}

//mark item completed
export function itemCompleted(itemId, isCompleted){
  return{
    type: "ITEM_COMPLETED",
    itemId,
    isCompleted
  }
}
