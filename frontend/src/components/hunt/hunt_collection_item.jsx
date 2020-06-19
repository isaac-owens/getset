import React from 'react';

class HuntCollectionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let { klassName } = this.props;
    klassName ? klassName = "mini-cards-active" : klassName = "mini-cards"

      return(
        false ? 
          <div className={klassName}>
            <div className="mini-card mini-one">
            </div>
            <div className="mini-card mini-two">
            Collection
            </div>
            <div className="mini-card mini-three">
            </div>
          </div> 
          : 
          <div className={klassName}>
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