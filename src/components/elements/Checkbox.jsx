import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.scss';

function Checkbox(props) {
  return (
    <div>
      <input
        id={props.id}
        tabIndex={props.tabIndex}
        className="checkbox"
        type="checkbox"
        name={props.id}
        onChange={props.changeHandler} />
      <label
        htmlFor={props.id}
        className="text-smaller">{props.children}</label>
    </div>
  );
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  tabIndex: PropTypes.string,
  changeHandler: PropTypes.func,
  children: PropTypes.string,
}

Checkbox.defaultProps = {
  tabIndex: "0",
  changeHandler: () => {},
}

export default Checkbox;
