import React from 'react';

class Category extends React.Component {
  constructor(props) {
    super(props);
    // Sets the reference to be to this component (the category 'button')
    this.container = React.createRef();
    this.state = {
      open: false,
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClickOutside() {
    // console.log('click outside');
    return (e) => {
      if (this.container.current &&
        !this.container.current.contains(e.target)) {
        this.setState({ open: false })
      }
    }
  }

  // Open and close the challenge menu
  handleClick(e) {
    e.preventDefault();
    this.setState({ open: !this.state.open });
  }

  expandCategory(e) {
    e.target.style = {
      width: "150%",
      outline: "none",
      backgroundColor: "#f3d250"
    };
  }

  closeCategory(e) {
    e.target.style = {
      width: "100%",
    }
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
        <div ref={this.container}>
          <div>
            <button className="category card-styling" onClick={this.handleClick}>
                <span className="category-title">
                  {category.name}
                </span>
            </button>
          </div>
          {this.state.open ? (
            <ul style={myStyle}>
              {
                !challenges ?
                <div></div> :
                challenges.map((challenge, idx)=>{
                  return (
                  <li 
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
        </div>
      );
    }
  };
}


export default Category;