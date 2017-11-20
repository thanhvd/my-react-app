import React from 'react';
import ToDoListItem from './TodoListItem';
import { ListGroup } from 'react-bootstrap';
import './TodoList.css';

function TodoList(props) {
  const items = props.items;
  const listItems = items.map((item, index) =>
    <ToDoListItem
      key={item.id}
      id={item.id}
      value={item.text}
      index={index + 1}
      finished={item.finished}
      edit={props.edit}
      delete={props.delete}
      finish={props.finish}
    />
  );
  return (
    <div className="TodoList">
    <ListGroup>
      {listItems}
    </ListGroup>
    </div>
  );
}

export default TodoList;