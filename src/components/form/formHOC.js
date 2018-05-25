import React from 'react'
import { Row, Col } from 'react-bootstrap';
import '../../index.css';


const FormHOC = (props) => (
    <div className="container center">
      <form className="form" action='/' method="POST" onSubmit={props.changed}>
        <Row>
          <Col xs={12}>
            <Row center="xs">
              {props.children}
            </Row>
          </Col>
        </Row>
      </form>
    </div>
);


export default FormHOC;