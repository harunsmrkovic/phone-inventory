'use strict';

import React from 'react';
import $ from 'jquery'

import ColorList from './ColorListComponent'

require('styles/colors/Color.sass');

class ColorComponent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      colors: []
    };
  }
  componentDidMount = () => {
    this.serverRequest = $.get(this.props.source, (result) => {
      this.setState({
        colors: result.data
      });
    })
  }
  componentWillUnmount = () => {
    this.serverRequest.abort();
  }
  render(){
    return (
      <ColorList colors={this.state.colors} />
    );
  }
}

ColorComponent.displayName = 'ColorsColorComponent';

// Uncomment properties you need
// ColorComponent.propTypes = {};
// ColorComponent.defaultProps = {};

export default ColorComponent;
