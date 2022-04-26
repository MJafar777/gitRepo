import React from "react";
import ReactDOM from "react-dom";
import HomeComponent from "./HomeComponent.js";
import MenuComponent from "./MenuComponent.js";
class App extends React.Component {
  render() {
    return (
      <div>
        <HomeComponent />
        <MenuComponent />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector("#root"));
