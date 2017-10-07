import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button(props) {
  const iconEle = !!props.iconClass ?
    <i className={`fa fa-2x button__icon ${props.iconClass}`} aria-hidden="true"></i> :
    null;
  const loadingEle = props.isLoading ?
    <i className="fa fa-circle-o-notch fa-spin fa-lg fa-fw"></i> :
    null;

  return (
    <button
      name={props.name}
      className={`button ${props.className}`}
      tabIndex={props.tabIndex}
      type="button"
      onClick={props.clickHandler || (() => { })}>
      {iconEle}
      {props.isLoading ? loadingEle : props.children}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  tabIndex: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  name: '',
  className: '',
  tabIndex: "0",
  onClick: () => { },
}

export default Button;
