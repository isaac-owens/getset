import React from 'react';

class Category extends React.Component {
  constructor(props) {
    super(props);
    // Sets the reference to be to this component (the category 'button')
    this.container = React.createRef();
    // Keeping the 'open' state of the menu, and the x and y positions
    // of the click
    this.state = {
      open: false,

    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Saves the x and y coordinates of the click event so the menu
  // position can be set dynamically 
  handleClick(e) {
    e.preventDefault();

    this.setState({ open: !this.state.open });
  }

  // Set and event listener for the mouse to move
  // Listens for a click afterward on the page
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside());
  }

  // Closes the menu if there is a click anywhere on the page besides the menu
  handleClickOutside() {
    return (e) => {
      if (
        this.container.current &&
        !this.container.current.contains(e.target)
      ) {     
        this.setState({ open: false });
      }
    };
  }

  render() {
    // Menu styling
    const myStyle = {
      height: "310px",
      display: "flex",
      alignContent: 'flex-end',
      flexDirection: "column",
      // justifyContent: "space-evenly",
      top: '100%',
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
          {/* key={category.id} */}
          <li ref={this.container}>
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
                    <li key={challenge._id} className="challenge-item card-styling" onClick={this.props.onChallegeClick(challenge)}>{ challenge.title}</li>
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

  }
}

export default Category;