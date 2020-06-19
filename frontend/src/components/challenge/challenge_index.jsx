import React from 'react';
import CategoryContainer from './category_container';
import Category from './category';

class ChallengeIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedChallenge: undefined};
    this.onChallengeClick = this.onChallengeClick.bind(this);
  }

  componentDidMount(){
    this.props.fetchCategories();
    this.props.fetchChallenges();
  }

  onChallengeClick(selectedChallenge){
   return e =>{
      this.setState({selectedChallenge: selectedChallenge})
    }
  }

  render(){
    const {challenges, categories} = this.props;
      return (
        <div className="challenge-index">
          <div className="challenge-index-list">
            <ul className="challenge-collection-list">
              {
                categories.map((category, idx)=>{
                  return <CategoryContainer key={idx} category={category} 
                  challenges={challenges[category._id]} 
                  onChallengeClick={this.onChallengeClick}/>
                })
              }
            </ul>
          </div>
          <div className="challenge-index-page-right">
            <div className="challenge-photo-collection card-styling">
              <ul className="challenge-photos">
              
                {
                  this.state.selectedChallenge ?
                  this.state.selectedChallenge.photo_collection.map((photo, idx)=>{
                    return <li key={idx} className="challenge-photo"><img src={photo}></img></li>
                  })
                   :
                  <></>
                }
              </ul>
            </div>
            <button className="challenge-toggle">
              Add a Hunt! / Remove a Hunt!
            </button>
          </div>
        </div>
      );
  }
  
}

export default ChallengeIndexPage;