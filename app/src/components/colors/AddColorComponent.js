'use strict';

import React from 'react';
import { connect } from 'react-redux'

require('styles/colors/AddColor.sass');

class AddColorComponent extends React.Component {
  render() {
    console.log('calling add component render');
    return (
      <form onSubmit={e => {
        e.preventDefault();
        setTimeout(() => {
          this.props.actions.addColor(this.input.value, 1);
        }, 1000);
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
