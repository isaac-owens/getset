import React from 'react';

class Category extends React.Component {
  constructor(props) {
    super(props);
    // Sets the reference to be to this component (the category 'button')
    this.container = React.createRef();
    this.state = {
      open: false,
    };
    // this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  render() {
    // Menu styling
    const myStyle = {
      height: "180px",
      display: "flex",
      alignContent: 'flex-end',
      flexDirection: "column",
      top: '120%',
      left: '69%',  
      tabIndex: "-1",
      position: "absolute",
      overflowX: 'hidden',
      overflowY: 'scroll',
      opacity: "1",
      pointerEvents: "auto",
      minWidth: "208px",
      padding: "5px 0",
      margin: "2px 0 0",
      backgroundClip: "padding-box",
      borderRadius: ".25rem",
      zIndex: "3000",
      listStyle: "none",
    };

    const {challenges, category} = this.props;

    if(!category || category.length === 0) {
      return <div></div>
    } else {
      return (
        <button className="category card-styling" onClick={this.handleClick}>
          <li>
            <div>
            <span className="category-title">{category ? category.name : "No Category"}</span>
            </div>
            {this.state.open ? (
              <ul style={myStyle}>
                {
                  !challenges ?
                  <div></div> :
                  challenges.map((challenge, idx)=>{
                    return (
                    <li 
                      ref={this.container}
                      key={challenge._id} 
                      className="challenge-item card-styling"
                      onClick={this.props.onChallengeClick(challenge)}
                      >
                      {challenge.title}
                    </li>
                    )
                  })
                }
              </ul>
            ) : (
              ""
            )}
          </li>
        </button>
      );
    }
  };
}


export default Category;