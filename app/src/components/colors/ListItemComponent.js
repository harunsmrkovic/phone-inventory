'use strict';

import React from 'react';

require('styles/colors/ListItem.sass');

class ListItemComponent extends React.Component {
  render() {
    return (
      <div>Boja je {this.props.color}</div>
    );
  }
}

ListItemComponent.displayName = 'ColorsListItemComponent';

// Uncomment properties you need
// ListItemComponent.propTypes = {};
// ListItemComponent.defaultProps = {};

export default ListItemComponent;
