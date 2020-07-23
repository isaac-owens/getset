import React from 'react';
import { Link } from 'react-router-dom';
import { CREATE } from '../../util/route_util';
import HuntCollectionItem from './hunt_collection_item';

class HuntsIndexActive extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selectedCollectionIdx: 0}

    this.onCollectionClick = this.onCollectionClick.bind(this);
    this.removeHuntCollection = this.removeHuntCollection.bind(this);
  }

  onCollectionClick(selectedIdx) {
    return e => {
      this.setState({ selectedCollectionIdx: selectedIdx })
    };
  }

  removeHuntCollection(id) {
      this.props.removeHunt(id);
  }

  // Component that will render if the user has made one or more hunts
  render() {
    const {hunts} = this.props;
    return (
      <div className="hunts-index-active">
        <div className="hunts-index-list-active card-styling">
          <ul className="hunts-collection-list-active">
            {
              hunts.map((hunt, idx) => {
                return <HuntCollectionItem 
                  key={idx} 
                  hunt={hunt} 
                  klassName={true} 
                  removeCollection={this.removeHuntCollection}
                  onCollectionClick ={this.onCollectionClick(idx)}
                />
              })
            }
          </ul>
        </div>
        <div className="hunts-index-page-right-active">
          <div className="hunt-photo-collection-active card-styling">
            <ul className="hunt-photo-collection-images-container">
              {
              hunts.length - 1 >= this.state.selectedCollectionIdx ? hunts[this.state.selectedCollectionIdx].photo_collection.map((photo, idx)=>{
                  console.log(photo);
                  return (
                    <li key={idx}>
                      <img 
                      src={photo}
                      alt=""
                      className="my-hunts-image"></img>
                    </li>
                  )
                }):
              <></>
              }
            </ul>
          </div>
          <button className="hunts-index-create-active">
            <Link 
            to={CREATE}
            className="hunts-index-create-link"> 
            Create a Hunt!
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default HuntsIndexActive;