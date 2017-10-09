import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function Input(props) {
  const iconEle = !!props.iconClass ?
    <i className={`fa input__icon ${props.iconClass}`} aria-hidden="true"></i> :
    null;
  const validationClass = props.isValid ? '' : 'input-container--invalid';

  return (
    <div className={`input-container ${validationClass}`}>
      {iconEle}
      <label className="hidden_label" htmlFor={props.id}>{props.name}</label>
      <input
        id={props.id}
        className="input"
        tabIndex={props.tabIndex}
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.changeHandler}
        onBlur={props.blurHandler}
      />
    </div>
  );
}

Input.propTypes = {
  id: PropTypes.string,
  tabIndex: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  changeHandler: PropTypes.func,
  blurHandler: PropTypes.func,
  iconClass: PropTypes.string,
  isValid: PropTypes.bool,
}

Input.defaultProps = {
  name: 'react_input',
  tabIndex: '0',
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'search', 'tel', 'url']),
  placeholder: '',
  changeHandler: () => {},
  blurHandler: () => {},
  iconClass: '',
  isValid: true,
}


export default Input;
