import React, { Component } from 'react';

class ListItem extends Component {

  toggleListItem(e){
    this.props.actions.toggleListItem(this.props.id);
  }

  render() {

    return (
      <li className={this.props.completed? 'completed':'not-completed'}>
        {this.props.text}
        {this.props.completed ? ' ~ 🎉 completed' : ''}
        <input type="checkbox" onClick={this.toggleTodo.bind(this)}/>
      </li>
    );
  }
}

export default ListItem;
