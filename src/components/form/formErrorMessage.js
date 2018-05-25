import React from 'react'
import { Col } from 'react-bootstrap';

const FormErrorMessage = () => (
    <div className="form-error">
      <Col xs={12}>
        <h4 className="text-danger">Please fill out all the fields in the right format.</h4>
      </Col>
    </div>
);


export default FormErrorMessage;

