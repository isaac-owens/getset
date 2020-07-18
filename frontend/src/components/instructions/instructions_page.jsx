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
    const dataArr = Object.values(data);
      return (
        <div className="instructions-page">
          <div className="instructions-sidebar card-styling">
            <ul>
              {
                Object.entries(data).map(([key,value])=>{
                  return <li key={key} onClick={this.onPageSelected(key)}>{value.name}</li>
                })
              }
            </ul>
          </div>
          <div className="instructions-gif">
            <img src={data[this.state.selectedPage].gifUrl} alt="" height="100%" width="1200px"/>
          </div>
          <div className="instructions-content card-styling">{data[this.state.selectedPage].instructions}</div>
        </div>
      ) 
  }
}

