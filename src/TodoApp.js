import React, { Component } from 'react';
import ToDoCreateItem from './TodoCreateItem';
import ToDoList from './TodoList';
import { Row, Col } from 'react-bootstrap';

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Row className="show-grid">
          <Col xs={6} xsOffset={3}>
            <ToDoCreateItem />
            <ToDoList />
          </Col>
        </Row>
      </div>
    );
  }
}

export default TodoApp;