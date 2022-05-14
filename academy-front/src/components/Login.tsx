import React from 'react'
import { Button, Form } from 'react-bootstrap'

export default function Login() {
  return (
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control type="email" placeholder="Email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox" >
    <Form.Check type="checkbox" label="Remember" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
  )
}
