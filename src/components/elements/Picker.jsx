import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Picker.scss';

class Picker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true
    }

    this.switchHide = this.switchHide.bind(this);
  }

  switchHide() {
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }));
  }

  render() {
    const flavours = this.props.buttonsList.map((item) =>
      <Button
        name={item.name}
        key={item.name}
        className="button--small"
        clickHandler={() => this.props.clickHandler(item)}>{item.name}
      </Button>
    )

    return (
      <aside className={`picker ${this.state.hidden ? 'picker--hidden' : ''}`}>
        <h3>Choose your flavour:</h3>
        {flavours}
        <button onClick={this.switchHide} className="picker__button" name="color and size picker"></button>
      </aside>
    )
  }
}

Picker.propTypes = {
  buttonsList: PropTypes.arrayOf(
    PropTypes.shape({ 
      name: PropTypes.string, 
    })
  ).isRequired,
  clickHandler: PropTypes.func.isRequired,
}


export default Picker;
