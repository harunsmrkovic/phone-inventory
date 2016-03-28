'use strict';

import React from 'react';
import $ from 'jquery'

import ColorList from './ColorListComponent'

require('styles/colors/Color.sass');

class ColorComponent extends React.Component {
  constructor(props){
    super(props);
    this.naloadaj = this.naloadaj.bind(this)
  }
  componentDidMount = () => {
    console.info('mounted, fetchign from', this.props.source);
    this.serverRequest = $.get(this.props.source, (result) => {
      result.data.forEach(color => {
        // this.props.actions.addColor(color.name, color._id);
      });
    })
  }
  componentWillUnmount = () => {
    this.serverRequest.abort();
  }
  naloadaj() {
    $.get(this.props.source, (result) => {
      result.data.forEach(color => {
        this.props.actions.addColor(color.name, color._id);
      });
    })
  }
  render(){
    console.log('calling color component render');
    return (
      <div>
        <a onClick={this.naloadaj}>klikni me</a>
        <ColorList colors={this.props.colors} />
      </div>
    );
  }
}

ColorComponent.displayName = 'ColorsColorComponent';

// Uncomment properties you need
// ColorComponent.propTypes = {};
// ColorComponent.defaultProps = {};

export default ColorComponent;
