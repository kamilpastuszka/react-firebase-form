import React from 'react'
import {FormGroup, Col, FormControl, ControlLabel, Row} from 'react-bootstrap';


const FormInput = (props) => (
    <FormGroup controlId="formHorizontalName">
    <Col componentClass={ControlLabel} xs={12}>
      {props.fieldname}
    </Col>
    <Col xs={12}>
      <FormControl  onChange={props.changed}  onClick={props.onClick} {...props} />
    </Col>
    <Row/>
  </FormGroup>
);

export default FormInput;
