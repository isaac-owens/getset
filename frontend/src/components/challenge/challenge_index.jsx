import React from 'react';
import CategoryContainer from './category_container';
import Category from './category';

class ChallengeIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedChallenge: undefined};
    this.onChallengeClick = this.onChallengeClick.bind(this);
    this.toggleMyChallage = this.toggleMyChallage.bind(this);
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
            {
              this.state.selectedChallenge ? 
              this.props.myChallenges.includes(this.state.selectedChallenge._id)?
                  <button onClick={this.toggleMyChallage("remove")} style={styleRemove} className="challenge-toggle">
                Remove This Challenge!
              </button> :
                  <button onClick={this.toggleMyChallage("add")} style={styleAdd} className="challenge-toggle">
              Accept this Challenge!
              </button>
            : <></>
            }
          </div>
        </div>
      );
  }
  
}

export default ChallengeIndexPage;