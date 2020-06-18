import React from 'react'

class ChallengeIndexPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
      return (
        <div className="challenge-index">
          <div className="challenge-index-list">
            <ul className="challenge-collection-list">
              <button className="category">People</button>
              <button className="category">Places</button>
              <button className="category">Things</button>
              <button className="category">Misc.</button>
            </ul>
          </div>
          <div className="challenge-index-page-right">
            <div className="challenge-photo-collection card-styling">
              <ul className="challenge-photos">
                <li className="challenge-photo">image here</li>
                <li className="challenge-photo">image here</li>
                <li className="challenge-photo">image here</li>
                <li className="challenge-photo">image here</li>
                <li className="challenge-photo">image here</li>
                <li className="challenge-photo">image here</li>
                <li className="challenge-photo">image here</li>
                <li className="challenge-photo">image here</li>
                <li className="challenge-photo">image here</li>
              </ul>
            </div>
            <button className="challenge-toggle">Add a Hunt! / Remove a Hunt!</button>
          </div>
        </div>
      );
  }
  
}

export default ChallengeIndexPage;