import React from 'react';
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import validator from 'validator';
import FormHOC from './formHOC';
import FormInput from './formInput';
import FormButton from './formButton';
import FormErrorMessage from './formErrorMessage';
import * as firebase from 'firebase';
import '../../firebase/firebase';

class FormData extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMousEnter = this.handleMousEnter.bind(this);
    this.removeErrorMessage = this.removeErrorMessage.bind(this);
    this.state = {
      formData: {
        Name: {
          fieldName: 'Name',
          inputType: 'text',
          componentClass: 'input',
          value: '',
          isValid: false
        },
        Email: {
          fieldName: 'Email',
          inputType: 'email',
          componentClass: 'input',
          value: '',
          isValid: false
        },
        Phone: {
          fieldName: 'Phone',
          inputType: 'number',
          componentClass: 'input',
          value: '',
          isValid: false

        },
        Comment: {
          feldName: 'Comment',
          inputType: 'textarea',
          componentClass: 'textarea',
          value: '',
          isValid: false,
          rows: 5,
        }
      },
      formValid: false,
      showErrorMessage: false
    }
  }


  handleMousEnter() {
    if (!this.state.formValid) {
      this.setState({ showErrorMessage: true });
    }
  }

  removeErrorMessage() {
    if (this.state.showErrorMessage) {
      this.setState({ showErrorMessage: false });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const submittedForm = {};

    for(let field in this.state.formData) {
      submittedForm[field] = this.state.formData[field].value
      }
    firebase.database().ref('/contactform').push({ 
      name: submittedForm.Name,
      phone: submittedForm.Phone,
      email: submittedForm.Email,
      comment: submittedForm.Comment
     });
    this.props.history.push('/thankyou');
  }

  validate(field, value, validator) {
    if (field.fieldName === 'Email') {
      field = !validator.isEmpty(value) && validator.isEmail(value);
    } else {
      field = !validator.isEmpty(value);
    }
    return field;
  }

  formControlOnChange(event, field) {
    const filledForm = {
      ...this.state.formData
    };
    const updatedFormInput = {
      ...filledForm[field]
    };
    updatedFormInput.value = event.target.value;
    updatedFormInput.isValid = this.validate(updatedFormInput, updatedFormInput.value, validator);
    console.log(updatedFormInput, updatedFormInput.value);
    filledForm[field] = updatedFormInput;

    let formValid = true;
    for (let field in filledForm) {
      formValid = filledForm[field].isValid && formValid;
    }
    this.setState({ formData: filledForm, formValid });
  }

  render() {
    const formDataArray = [];
    for (let field in this.state.formData) {
      formDataArray.push({
        field,
        value: this.state.formData[field].value,
        inputType: this.state.formData[field].inputType,
        componentClass: this.state.formData[field].componentClass,
        rows: this.state.formData[field].rows
      });
    }

    return (
      <FormHOC changed={this.handleSubmit}>
        {formDataArray.map(el => (
          <FormInput
            fieldname={el.field}
            type={el.inputType}
            key={el.field}
            placeholder={el.placeholder}
            componentClass={el.componentClass}
            value={el.value}
            rows={el.rows}
            onChange={(event) => this.formControlOnChange(event, el.field)}
            onClick={this.removeErrorMessage} />
        ))}
        <FormButton
          disabled={!this.state.formValid}
          mouseEnter={this.handleMousEnter}
        />
        {(this.state.showErrorMessage) ? <FormErrorMessage /> : ""}
        </FormHOC>
    );
  }
}

export default withRouter(FormData);

