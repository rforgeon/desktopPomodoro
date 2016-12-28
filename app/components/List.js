import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {

  render() {

    return (
      <ul class="List">
        {this.props.listItems.map(listItem =>
          <Todo
            key={listItem.id}
            {...listItem}
            onClick={() => this.onListItemClick(listItem.id)}
            actions={this.props.actions}
          />
        )}
      </ul>
    );
  }
}

export default List;
