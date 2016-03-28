'use strict';

import React from 'react';

import ListItem from './ListItemComponent'

require('styles/colors/ColorList.sass');

class ColorListComponent extends React.Component {
  renderListItem = (color) => <ListItem color={color.name} key={color._id} />

  render() {
    console.log('calling colorlist component render');
    let listItems = this.props.colors.map(this.renderListItem);

    return (
      <div>
        API: {listItems}
      </div>
    );
  }
}

ColorListComponent.displayName = 'ColorsColorListComponent';

// Uncomment properties you need
// ColorListComponent.propTypes = {};
// ColorListComponent.defaultProps = {};

export default ColorListComponent;
