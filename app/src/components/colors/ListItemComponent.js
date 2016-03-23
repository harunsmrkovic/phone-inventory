'use strict';

import React from 'react';

require('styles/colors/ListItem.sass');

class ListItemComponent extends React.Component {
  render() {
    return (
      <li>
        <strong>{this.props.color}</strong>
      </li>
    );
  }
}

ListItemComponent.displayName = 'ColorsListItemComponent';

// Uncomment properties you need
// ListItemComponent.propTypes = {};
// ListItemComponent.defaultProps = {};

export default ListItemComponent;
