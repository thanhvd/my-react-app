import React from 'react';
import { ListGroupItem, ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import './TodoListItem.css';

function TodoListItem(props) {
  return (
    <ListGroupItem>
      <div onClick={() => props.finish(props.id)}>
        <span style={{ textDecoration: props.finished ? 'line-through' : 'none' }}>{props.index}. {props.value}</span>
        <ButtonToolbar className="actionButtons">
          <ButtonGroup bsSize="xsmall">
            <Button bsStyle="info" onClick={() => props.edit(props.id)}>Edit</Button>
            <Button bsStyle="danger" onClick={() => props.delete(props.id)}>Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>  
      </div>
    </ListGroupItem>
  );
}

export default TodoListItem;