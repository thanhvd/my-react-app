import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Form } from 'react-bootstrap';

function TodoCreateItem(props) {
  return (
    <div className="TodoCreateItem">
      <Form inline onSubmit={props.handleSubmit}>
        <FormGroup controlId="newTask">
          <ControlLabel>Task</ControlLabel>
          {' '}
          <FormControl
            type="text"
            onChange={props.handleChange}
            value={props.text}
            placeholder="Enter a new task"
          />
        </FormGroup>

        <Button bsStyle="primary" type="submit">
          Add #{props.items.length + 1} task
        </Button>
      </Form>
    </div>
  );
}

export default TodoCreateItem;