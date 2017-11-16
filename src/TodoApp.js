import React, { Component } from 'react';
import ToDoCreateItem from './TodoCreateItem';
import ToDoList from './TodoList';
import { Row, Col } from 'react-bootstrap';
import './TodoApp.css';

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newTask = {
      text: this.state.text,
      id: Date.now()
    }
    this.setState(prevState => ({
      items: prevState.items.concat(newTask),
      text: ''
    }));
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div className="TodoApp">
        <Row className="show-grid">
          <Col xs={6} xsOffset={3}>
            <ToDoCreateItem
              items={this.state.items}
              text={this.state.text}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <ToDoList items={this.state.items}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default TodoApp;