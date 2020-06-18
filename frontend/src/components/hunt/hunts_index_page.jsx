import React from 'react';


class HuntsIndexPage extends React.Component {
  constructor(props){
    super(props);
    
  }

  render() {
    return(
    <div className="hunts-index">
      <div className="hunts-index-list">
        <ul>
          <li>Hunt Collection</li>
          <li>Hunt Collection</li>
          <li>Hunt Collection</li>
          <li>Hunt Collection</li>
        </ul>
      </div>
      <div className="hunts-index-page-right">
        <div className="hunt-photo-collection">
          Looks like you have no hunts...<a>Create a hunt!</a>
        </div>
        <button className="hunts-index-create">
          Create a Hunt!
        </button>
      </div>
    </div>
    )
  }
}

export default HuntsIndexPage;