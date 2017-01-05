

const initialState = []

var idIndex = 0;

function listItems(state = [],action){

  switch (action.type){
    case "ADD_LIST_ITEM":
      return [
        ...state,
        {
          id: idIndex++,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_COMPLETED":
      return state.map(function(element){
        if (element.id == action.id){
            element.completed = !element.completed;
        }
        return element;
      });
    default:
      return state;
    }

}

export default listItems;
