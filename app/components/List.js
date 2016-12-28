import React, { Component } from 'react';
import ListItem from './ListItem';

class List extends Component {

  onListItemClick(){

  }

  render() {

    return (
      <ul class="List">
        {this.props.listItems.map(listItem =>
          <ListItem
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
