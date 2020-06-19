import React from 'react';

class HuntCollectionItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // conditionally render class name based on props for styling
    let { hunt, klassName } = this.props;
    klassName ? klassName = "mini-cards-active" : klassName = "mini-cards"

      return(
        false ? 
          <div className={klassName}>
            <div className="mini-card mini-one">
            </div>
            <div className="mini-card mini-two">
            {hunt.title}
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