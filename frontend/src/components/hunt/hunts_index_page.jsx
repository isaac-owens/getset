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
    if (typeof this.props.hunts === 'undefined') {
      return <HuntsIndexInactive />
    } else if (this.props.hunts.length === 0) {
      return <HuntsIndexInactive />
    } else { 
      return <HuntsIndexActive 
      removeHunt={this.props.removeHunt} 
      hunts={this.props.hunts}/> 
    }
  }
}

export default HuntsIndexPage;