import React from 'react'
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react'


class NewItem extends React.Component {


  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <label>Name of Dish</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>One Liner or Drop Line</label>
            <input placeholder='Last Name' />
          </Form.Field>
             <Form.TextArea label='Description' placeholder='Full Description Here' />
          <Button type='submit'>Submit</Button>
        </Form>
      </div>
    )}
}
export default withRouter(NewItem)
