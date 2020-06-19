import React from 'react';
import CategoryContainer from './category_container';
import Category from './category';

class ChallengeIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedChallenge: undefined};
    this.onChallegeClick = this.onChallegeClick.bind(this);
    this.toggleMyChallage = this.toggleMyChallage.bind(this);
  }

  componentDidMount(){
    this.props.fetchChallenges();
    this.props.fetchCategories();
  }

  onChallegeClick(selectedChallenge){
   return e=>{
      this.setState({selectedChallenge: selectedChallenge})
    }
  }

  toggleMyChallage(toggle){

    return e=>{
      debugger
      if(toggle == "add"){
        this.props.addToMyChallenges(this.state.selectedChallenge._id);
      }else{
        this.props.deleteChallenges(this.state.selectedChallenge._id);
      }
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
                  onChallegeClick={this.onChallegeClick}/>
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
            {/* / Remove a Hunt! */}
            {
              this.state.selectedChallenge ? 
              this.props.myChallenges.includes(this.state.selectedChallenge._id)?
              <button onClick={this.toggleMyChallage("remove")} className="challenge-toggle">
                Remove a Hunt!
              </button> :
              <button onClick={this.toggleMyChallage("add")} className="challenge-toggle">
              Add a Hunt!
              </button>
            : <></>
            }
          </div>
        </div>
      );
  }
  
}

export default ChallengeIndexPage;