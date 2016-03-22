require('normalize.css');
require('styles/App.css');

import React from 'react';
import Color from './colors/ColorComponent'

class AppComponent extends React.Component {
  render() {
    return (
      <Color source="http://localhost:3030/colors" boje="plava, crna" />
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
