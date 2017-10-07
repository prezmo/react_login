import React from 'react';
import './FormField.scss';

function FormField(props) {
  return (
    <div className={`form-field ${props.className}`}>
      {props.children}
    </div>
  )
}

export default FormField;
