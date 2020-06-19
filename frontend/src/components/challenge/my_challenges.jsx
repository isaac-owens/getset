import React from 'react';
import HuntCollectionItem from '../hunt/hunt_collection_item';

class MyChallenges extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedCollectionIdx: 0}

    this.onCollectionClick = this.onCollectionClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchMyChallenges();
  }

  onCollectionClick(selectedIdx){
    return e=>{
      this.setState({selectedCollectionIdx: selectedIdx})
    }
  }

  // Component that will render if the user has made one or more hunts
  render() {
    return (
      <div className="my-challenges">
        <div className="my-challenges-list card-styling">
          <ul className="my-challenges-collection-list">
            {/* dynamically build user's accepted challenges list */}
            {this.props.challenges.map((challenge, idx) => {
              return <HuntCollectionItem klassName={true}  key={idx} hunt={challenge[0]}
                onCollectionClick={this.onCollectionClick(idx)}/>
            })}
          </ul>
        </div>
        <div className="my-challenges-page-right">
          <div className="my-challenges-photo-collection card-styling">
            <ul className="my-challenges-comparison-list">
              
              {
                this.props.challenges[this.state.selectedCollectionIdx][0]? 

                this.props.challenges[this.state.selectedCollectionIdx][0].photo_collection.map((photo, idx)=>{
                  return (
                    <li key={idx} className="comparison-zone">
                      <div className="my-challenges-photo">
                        <img src={photo} ></img>
                      </div>
                      <div className="my-challenges-drop-zone"><span className="my-challenges-drop-zone-message">drop zone component</span></div>
                    </li>
                  )
                }):

                  <li className="comparison-zone">
                      <div className="my-challenges-photo">image</div>
                      <div className="my-challenges-drop-zone"><span className="my-challenges-drop-zone-message">drop zone component</span></div>
                  </li>
              }
            </ul>
          </div>
          <button className="my-challenges-create">Complete Challenge!</button>
        </div>
      </div>
    );
  }
}

export default MyChallenges;