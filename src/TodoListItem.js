import React, { Component } from 'react';
import { ListGroupItem, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import './TodoListItem.css';

class TodoListItem extends Component {
  render() {
    return (
      <ListGroupItem>
        {this.props.index}. {this.props.value}
        <ButtonToolbar className="actionButtons">
          <ButtonGroup bsSize="xsmall">
            <Button bsStyle="info">Edit</Button>
            <Button bsStyle="danger">Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>  
      </ListGroupItem>
    );
  }
}

export default TodoListItem;