import React from 'react'
import { FormGroup, Col, Button, Row } from 'react-bootstrap';

const FormButton = (props) => (
  <FormGroup>
    <Col xs={12}>
      <Button bsStyle="primary" type="submit" disabled={props.disabled} onMouseEnter={props.mouseEnter} onMouseOut={props.mouseLeave}>Submit</Button>
    </Col>
    <Row />
  </FormGroup>
);

export default FormButton;
