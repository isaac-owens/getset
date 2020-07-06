import React from 'react';

class Category extends React.Component {
  constructor(props) {
    super(props);
    // Sets the reference to be to this component (the dropdown menu)
    this.container = React.createRef();
    this.state = {
      open: false,
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside());
  }

  handleClickOutside() {
    console.log('click outside');
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

  render() {
  
    const buttonExpanded = {
      width: "450px",
      backgroundColor: "#f3d250",
    }
    
    const buttonClosed = {
      width: "200px",
    }
    
    let buttonStyle;
    buttonStyle = this.state.open ? buttonExpanded : buttonClosed;

    const menuExpanded = {
      opacity: "1"
    }

    const menuClosed = {
      opacity: "0"
    }
    
    let menuStyle;
    menuStyle = this.state.open ? menuExpanded : menuClosed;

    const {challenges, category} = this.props;

    if(!category || category.length === 0) {
      return <div></div>
    } else {
      return (
        <div ref={this.container}>
            <button 
              onClick={this.handleClick}
              className="category card-styling" 
              style={buttonStyle}>
                <span className="category-title">
                  {category.name}
                </span>
            </button>
          {this.state.open ? (
            <ul 
            className="challenge-menu"
            >
              {!challenges ?
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