import React from 'react';
import HuntsIndexActive from './hunts_index_active';
import HuntsIndexInactive from './hunts_index_inactive';

class HuntsIndexPag extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hunts: this.props.hunts
    }
  }

  render() {
    return (
      {this.state.hasChallenges ? <HuntsIndexActive /> : <HuntsIndexInactive />}
    )
  }
}

export default HuntsIndexPage;