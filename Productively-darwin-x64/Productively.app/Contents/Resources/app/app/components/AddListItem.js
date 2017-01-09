import React, { Component } from 'react';


export default class addListItem extends Component{

  enterKey(){
    document.getElementById("inputBox")
      .addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode == 13) {
          document.getElementById("inputButton").click();
      }
    });
  }

  render(){

    window.onload=function(){
      this.enterKey();
    }

    let input;
    return (
      <div>
        <input id="inputBox" ref={node => {
          input = node;
        }} />
        <button id="inputButton" onClick={() => {
          this.props.actions.addTodo(input.value);
          input.value = '';
        }}>
          Add Todo
        </button>
      </div>
    );
  };

}
