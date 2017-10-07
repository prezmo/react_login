import React from 'react';
import './FormContainer.scss';

function FormContainer(props) {
  return (
    <form noValidate>
      <fieldset className="form-fields">
        {props.children}
      </fieldset>
    </form>
  );
}

export default FormContainer;
