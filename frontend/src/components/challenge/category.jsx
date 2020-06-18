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
      x: 0,
      y: 0,
    };
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // Saves the x and y coordinates of the click event so the menu
  // position can be set dynamically 
  handleClick(e) {
    e.preventDefault();
    const clickX = e.clientX;
    const clickY = e.clientY;
    this.setState({ open: !this.state.open, x: clickX, y: clickY });
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
        this.setState({ open: false, x: 0, y: 0 });
      }
    };
  }

  render() {
    // Menu styling
    const myStyle = {
      height: "33%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      top: `${this.state.y + 53}px`,
      left: `${this.state.x - 90}vh`,
      tabIndex: "-1",
      position: "fixed",
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

    return (
      <button className="category card-styling" onClick={this.handleClick}>
        {/* key={category.id} */}
        <li ref={this.container}>
          <div>
            <span className="category-title">Category</span>
          </div>
          {this.state.open ? (
            <ul style={myStyle}>
              <li className="challenge-item card-styling">Challenge 1</li>
              <li className="challenge-item card-styling">Challenge 2</li>
              <li className="challenge-item card-styling">Challenge 3</li>
              <li className="challenge-item card-styling">Challenge 4</li>
            </ul>
          ) : (
            ""
          )}
        </li>
      </button>
    );
  }
}

export default Category;