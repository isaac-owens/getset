import React from 'react';
import HuntCollectionItem from './hunt_collection_item';

class HuntsIndexActive extends React.Component {
  constructor(props) {
    super(props);
  }

  // Component that will render if the user has made one or more hunts
  render() {
    return (
      <div className="hunts-index">
        <div className="hunts-index-list card-styling">
          <ul className="hunts-collection-list">
            {/* dynamically build user's hunt list */}
            {/* {this.props.hunts.map(hunt => {
              <HuntCollectionItem hunt={hunt}/>
            })} */}
            <HuntCollectionItem />
          </ul>
        </div>
        <div className="hunts-index-page-right">
          <div className="hunt-photo-collection card-styling">
            Looks like you have no hunts... <a className="empty-index-link">Create a hunt!</a>
          </div>
          <button className="hunts-index-create"> Create a Hunt!</button>
        </div>
      </div>
    );
  }
}

export default HuntsIndexActive;