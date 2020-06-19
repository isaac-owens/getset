import React from 'react';
import HuntsIndexActive from './hunts_index_active';
import HuntsIndexInactive from './hunts_index_inactive';
import { withRouter } from 'react-router-dom';

class HuntsIndexPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hunts: false
    }
  }

  render() {
    return (
      true ? 
      <HuntsIndexActive /> 
      : 
      <HuntsIndexInactive />
    )
  }
}

export default HuntsIndexPage;