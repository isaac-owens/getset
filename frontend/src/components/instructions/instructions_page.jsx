import React, { Component } from 'react';
import {data}  from '../../util/instructions_data';

export default class Instructions extends Component { 
  constructor(props){
    super(props);

    this.state = {selectedPage : 0}
  }

  onPageSelected = (pageIdx) => {
    return e => {
      this.setState({selectedPage : pageIdx});
    }
  }
  
  render(){
      return (
        <div className="instructions-page">
          <div className="instructions-sidebar">
            <ul className="instructions-sidebar-items">
              {
                Object.entries(data).map(([key,value])=>{
                  return <li className="instructions-sidebar-item card-styling" key={key} onClick={this.onPageSelected(key)}>{value.name}</li>
                })
              }
            </ul>
          </div>
          <div className="instructions-gif">
            <img src={data[this.state.selectedPage].gifUrl} alt="" height="100%" width="900px"/>
          </div>
          <div className="instructions-content card-styling">{data[this.state.selectedPage].instructions}</div>
        </div>
      ) 
  }
}

