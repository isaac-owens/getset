import React from 'react';

class HuntCollectionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

      return(
        false ? 
          <div className="mini-cards">
            <div className="mini-card mini-one">
            </div>
            <div className="mini-card mini-two">
            Collection
            </div>
            <div className="mini-card mini-three">
            </div>
          </div> 
          : 
          <div className="mini-cards">
            <div className="mini-card mini-one">
            </div>
            <div className="mini-card mini-two">
            Collection
            </div>
            <div className="mini-card mini-three">
            </div>
          </div> 
      )
  }
}


export default HuntCollectionItem;