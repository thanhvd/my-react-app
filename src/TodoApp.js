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
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFinish = this.handleFinish.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newTask = {
      text: this.state.text,
      finished: false,
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

  handleEdit(id) {
    const text = prompt("Enter new text");
    const items = this.state.items;
    this.setState({items: items.map(
      (el)=> el.id === id ? Object.assign({}, el, {text: text}) : el 
    )});
  }

  handleDelete(id) {
    const items = this.state.items.filter(item => {
      return item.id !== id ? item : null;
    });
    this.setState({items: items});
  }

  handleFinish(id) {
    const items = this.state.items;
    this.setState({items: items.map(
      (el)=> el.id === id ? Object.assign({}, el, {finished: !el.finished}) : el 
    )});
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
            <ToDoList
              items={this.state.items}
              edit={this.handleEdit}
              delete={this.handleDelete}
              finish={this.handleFinish}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default TodoApp;