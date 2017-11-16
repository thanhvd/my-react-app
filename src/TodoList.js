import React, { Component } from 'react';
import ToDoListItem from './TodoListItem';
import { ListGroup } from 'react-bootstrap';
import './TodoList.css';

class TodoList extends Component {
  render() {
    console.log('test');
    const items = this.props.items;
    const listItems = items.map((item, index) =>
      <ToDoListItem
        key={item.id}
        value={item.text}
        index={index + 1}
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
}

export default TodoList;