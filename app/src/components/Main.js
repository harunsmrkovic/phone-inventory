require('normalize.css');
require('styles/App.css');

import React from 'react';
import Color from './colors/ColorComponent'
import AddColor from './colors/AddColorComponent'

class AppComponent extends React.Component {
  render() {
    console.info('props', this.props);
    return (
      <div>
        <AddColor actions={this.props.actions} />
        <Color source="http://localhost:3030/colors" boje="plava, crna" />
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
