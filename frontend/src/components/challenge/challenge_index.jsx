import React from 'react';
import Category from './category';

class ChallengeIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedChallenge: undefined};
    this.onChallengeClick = this.onChallengeClick.bind(this);
    this.toggleMyChallenge = this.toggleMyChallenge.bind(this);
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

  // Add and remove challenge to user's 'My Challenge' list
  toggleMyChallenge(toggle){
    return e=>{
      if(toggle == "add"){
        this.props.addToMyChallenge(this.state.selectedChallenge);
      }else{
        this.props.deleteChallenge(this.state.selectedChallenge._id);
      }
    }
  }

  render(){
    const {challenges, categories} = this.props;
    let styleRemove = {
      backgroundColor: "#f3d250"
    }

    let styleAdd = {
      backgroundColor: '#c5cbe3',
    }

      return (
        <div className="challenge-index">
          <div className="challenge-index-list">
            <ul className="challenge-collection-list">
              {
                categories.map((category, idx)=>{
                  return <Category key={idx} category={category} 
                  challenges={challenges[category._id]} 
                  onChallengeClick={this.onChallengeClick}/>
                })
              }
            </ul>
          </div>
          <div className="challenge-index-page-right">
          {this.state.selectedChallenge ? 
            <div className="challenge-photo-collection card-styling">
              <ul className="challenge-photos">
                {
                  this.state.selectedChallenge ?
                  this.state.selectedChallenge.photo_collection.map((photo, idx)=>{
                    return <li key={idx} className="challenge-photo"><img src={photo}></img></li>
                  }) :
                  <div></div>
                }
              </ul>
            </div> : 
            <div className="challenge-photo-collection challenge-photo-empty">Find and pick a Challenge!</div>
          }{
            this.state.selectedChallenge ? 
            this.props.myChallenges[this.state.selectedChallenge._id] ?
            <button onClick={this.toggleMyChallenge("remove")} style={styleRemove} className="challenge-toggle">
              Remove This Challenge!
            </button> :
            <button onClick={this.toggleMyChallenge("add")} style={styleAdd} className="challenge-toggle">
              Accept this Challenge!
            </button> :
            <></>
          }
        </div>
      </div>
    );
  }
  
}

export default ChallengeIndexPage;