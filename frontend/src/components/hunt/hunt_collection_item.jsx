import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

class HuntCollectionItem extends React.Component {

  render() {
    // conditionally render class name based on props for styling
    let redEx = <FontAwesomeIcon icon={faTimesCircle} size="2x"/>
    let { hunt, klassName } = this.props;
    klassName ? klassName = "mini-cards-active" : klassName = "mini-cards"

      return(
        hunt ? 
          <li  onClick={this.props.onCollectionClick}  className={klassName}>
            {hunt.title}
            <div className='hunt-collection-ex' 
            // onClick={() => console.log('click')}
            onClick={() => this.props.removeCollection(hunt._id)}
            >{redEx}</div>
          </li> 
          : 
          <li  className={klassName}>
            <div className="mini-card mini-one">
            </div>
            <div className="mini-card mini-two">
            Collection
            </div>
            <div className="mini-card mini-three">
            </div>
          </li> 
      )
  }
}




export default HuntCollectionItem;