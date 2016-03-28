require('normalize.css');
require('styles/App.css');

import React from 'react';
import Color from './colors/ColorComponent'
import AddColor from './colors/AddColorComponent'

class AppComponent extends React.Component {
  render() {
    console.info('props @ Main', this.props);
    return (
      <div>
        <AddColor actions={this.props.actions} />
        <Color source="http://localhost:3030/colors" colors={this.props.colors} actions={this.props.actions} />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
