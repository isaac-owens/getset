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

  componentDidMount(){
    this.props.fetchUserHunts(this.props.currentUserId);
  }

  render() {
    return (
      this.props.hunts ? 
      <HuntsIndexActive hunts={this.props.hunts}/> 
      : 
      <HuntsIndexInactive />
    )
  }
}

export default HuntsIndexPage;