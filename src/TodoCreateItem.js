import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Form } from 'react-bootstrap';

class TodoCreateItem extends Component {
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
      <div className="TodoCreateItem">
        <Form inline onSubmit={this.handleSubmit}>
          <FormGroup controlId="newTask">
            <ControlLabel>Task</ControlLabel>
            {' '}
            <FormControl
              type="text"
              onChange={this.handleChange}
              value={this.state.text}
            />
          </FormGroup>

          <Button bsStyle="primary" type="submit">
            Add #{this.state.items.length + 1} task
          </Button>
        </Form>
      </div>
    );
  }
}

export default TodoCreateItem;