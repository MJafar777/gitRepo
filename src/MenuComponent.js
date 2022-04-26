import React from "react";

class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="MenuCard">
        <div className="menulinks">
          <a href="{../../HomeComponent.js}" className="link">
            Home
          </a>
          <a href="{#}" className="link">
            Portfolio
          </a>
          <a href="{#}" className="link">
            About
          </a>
          <a href="{#}" className="link">
            Contact
          </a>
        </div>
      </div>
    );
  }
}

export default MenuComponent;
