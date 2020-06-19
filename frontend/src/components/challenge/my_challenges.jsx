import React from 'react';
import HuntCollectionItem from '../hunt/hunt_collection_item';

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
            {/* dynamically build user's accepted challenges list */}
            {/* {this.props.challenges.map(challenge => {
              <HuntCollectionItem challenge={challenge}/>
            })} */}
            <HuntCollectionItem klassName={true} />
            <HuntCollectionItem klassName={true} />
            <HuntCollectionItem klassName={true} />
          </ul>
        </div>
        <div className="my-challenges-page-right">
          <div className="my-challenges-photo-collection card-styling">
            <ul className="my-challenges-comparison-list">
            {/* {photos.map(photo =>  */}
              <li className="comparison-zone">
                <div className="my-challenges-photo">image</div>
                <div className="my-challenges-drop-zone"><span className="my-challenges-drop-zone-message">drop zone component</span></div>
              </li>
              <li className="comparison-zone">
                <div className="my-challenges-photo">image</div>
                <div className="my-challenges-drop-zone"><span className="my-challenges-drop-zone-message">drop zone component</span></div>
              </li>
              <li className="comparison-zone">
                <div className="my-challenges-photo">image</div>
                <div className="my-challenges-drop-zone"><span className="my-challenges-drop-zone-message">drop zone component</span></div>
              </li>
              <li className="comparison-zone">
                <div className="my-challenges-photo">image</div>
                <div className="my-challenges-drop-zone"><span className="my-challenges-drop-zone-message">drop zone component</span></div>
              </li>
              {/* )} */}
            </ul>
          </div>
          <button className="my-challenges-create">Complete Challenge!</button>
        </div>
      </div>
    );
  }
}

export default MyChallenges;