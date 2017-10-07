import React from 'react';
import './ValidationMessage.scss';

function ValidationMessage(props) {
  return (
    props.text ? <span className="validation-message">{props.text}</span> : null
  )
}

export default ValidationMessage;
