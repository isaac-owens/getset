import React from 'react';
import HuntCollectionItem from './hunt_collection_item';

class HuntsIndexPage extends React.Component {
  constructor(props){
    super(props);
    
  }

  render() {
    return (
      <div className="hunts-index">
        <div className="hunts-index-list card-styling">
          <ul className="hunts-collection-list">
            <HuntCollectionItem />
            <HuntCollectionItem />
            <HuntCollectionItem />
            <HuntCollectionItem />
          </ul>
        </div>
        <div className="hunts-index-page-right">
          <div className="hunt-photo-collection card-styling">
            Looks like you have no hunts...<a>Create a hunt!</a>
          </div>
          <button className="hunts-index-create">Create a Hunt!</button>
        </div>
      </div>
    );
  }
}

export default HuntsIndexPage;