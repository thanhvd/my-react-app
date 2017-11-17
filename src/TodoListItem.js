import React from 'react';
import { ListGroupItem, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import './TodoListItem.css';

function TodoListItem(props) {
  return (
    <ListGroupItem>
      {props.index}. {props.value}
      <ButtonToolbar className="actionButtons">
        <ButtonGroup bsSize="xsmall">
          <Button bsStyle="info" onClick={() => props.edit(props.id)}>Edit</Button>
          <Button bsStyle="danger" onClick={() => props.delete(props.id)}>Delete</Button>
        </ButtonGroup>
      </ButtonToolbar>  
    </ListGroupItem>
  );
}

export default TodoListItem;