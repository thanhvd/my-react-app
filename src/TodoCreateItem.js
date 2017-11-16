import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Form } from 'react-bootstrap';

class TodoCreateItem extends Component {
  render() {
    return (
      <div className="TodoCreateItem">
        <Form inline onSubmit={this.props.handleSubmit}>
          <FormGroup controlId="newTask">
            <ControlLabel>Task</ControlLabel>
            {' '}
            <FormControl
              type="text"
              onChange={this.props.handleChange}
              value={this.props.text}
              placeholder="Enter a new task"
            />
          </FormGroup>

          <Button bsStyle="primary" type="submit">
            Add #{this.props.items.length + 1} task
          </Button>
        </Form>
      </div>
    );
  }
}

export default TodoCreateItem;