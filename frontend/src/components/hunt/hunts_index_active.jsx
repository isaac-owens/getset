import React from 'react';
import HuntCollectionItem from './hunt_collection_item';

class HuntsIndexActive extends React.Component {
  constructor(props) {
    super(props);
  }

  // Component that will render if the user has made one or more hunts
  render() {
    return (
      <div className="hunts-index-active">
        <div className="hunts-index-list-active card-styling">
          <ul className="hunts-collection-list-active">
            {/* dynamically build user's hunt list */}
            {/* {this.props.hunts.map(hunt => {
              <HuntCollectionItem hunt={hunt}/>
            })} */}
            <HuntCollectionItem />
          </ul>
        </div>
        <div className="hunts-index-page-right-active">
          <div className="hunt-photo-collection-active card-styling">
            Looks like you have no hunts... <a className="empty-index-link-active">Create a hunt!</a>
          </div>
          <button className="hunts-index-create-active"> Create a Hunt!</button>
        </div>
      </div>
    );
  }
}

export default HuntsIndexActive;