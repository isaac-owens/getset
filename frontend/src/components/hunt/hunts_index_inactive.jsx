import React from 'react';
import { CREATE } from '../../util/route_util';
import { Link } from 'react-router-dom';

import HuntCollectionItem from './hunt_collection_item';


class HuntsIndexPage extends React.Component {
  constructor(props){
    super(props);
  }

  
  // component that renders is the user currently has made no hunts 
  render() {
    return (
      <div className="hunts-index">
        <div className="hunts-index-list card-styling">
          <ul className="hunts-collection-list">
            <HuntCollectionItem hunt={null}/>
            <HuntCollectionItem hunt={null}/>
            <HuntCollectionItem hunt={null}/>
            <HuntCollectionItem hunt={null}/>
          </ul>
        </div>
        <div className="hunts-index-page-right">
          <div className="hunt-photo-collection card-styling">
            Looks like you have no hunts... <Link to={CREATE} className="empty-index-link">Create a hunt!</Link>
          </div>
          <button className="hunts-index-create">
            <Link to={CREATE}>
            Create a Hunt!
          </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default HuntsIndexPage;