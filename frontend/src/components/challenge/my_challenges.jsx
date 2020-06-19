import React from 'react';
import HuntCollectionItem from './hunt_collection_item';

class MyChallenges extends React.Component {
  constructor(props) {
    super(props);
  }

  // Component that will render if the user has made one or more hunts
  render() {
    return (
      <div className="my-challenges">
        <div className="my-challenges-list card-styling">
          <ul className="my-challenges-collection-list">
            {/* dynamically build user's hunt list */}
            {/* {this.props.hunts.map(hunt => {
              <HuntCollectionItem hunt={hunt}/>
            })} */}
            <HuntCollectionItem klassName={true} />
            <HuntCollectionItem klassName={true} />
            <HuntCollectionItem klassName={true} />
          </ul>
        </div>
        <div className="my-challenges-page-right">
          <div className="my-challenges-photo-collection card-styling">
            red area
          </div>
          <button className="my-challenges-create"> Create a Hunt!</button>
        </div>
      </div>
    );
  }
}

export default MyChallenges;