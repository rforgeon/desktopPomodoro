//start timer
export function startTimer(index){
  return{
    type: "START_TIMER",
    index
  }
}

//reset timer
export function resetTimer(index){
  return{
    type: "RESET_TIMER",
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
