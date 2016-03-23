'use strict';

import React from 'react';
import { connect } from 'react-redux'

require('styles/colors/AddColor.sass');

class AddColorComponent extends React.Component {
  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        this.props.actions.addColor(this.input.value);
      }}>
        <input ref={node => { this.input = node }} />
      </form>
    );
  }
}

AddColorComponent.displayName = 'ColorsAddColorComponent';

// Uncomment properties you need
// AddColorComponent.propTypes = {};
// AddColorComponent.defaultProps = {};

export default AddColorComponent;
