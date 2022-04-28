import React from "react";

const data = [
  {
    savol: "react zurmi?",
    javob: "bilmadim",
  },
  {
    savol: "js zurmi?",
    javob: "bilmadim",
  },
  { savol: "html zurmi?", javob: "xa" },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null,
    };
  }
  getIndex = (key) => {
    this.setState({ index: key });
  };
  renderData() {
    return data.map((val, key) => {
      let active;
      if (this.state.index === key) {
        active = "active";
      }
      return (
        <div>
          <div className="ui styled accordion">
            <div
              className={"title " + active}
              onClick={() => {
                return this.getIndex(key);
              }}
            >
              <i className="dropdown icon"></i>
              {val.savol}
            </div>
            <div className={"content " + active}>
              <p
                className="transition visible"
                style={{ display: "block !important" }}
              >
                {val.javob}
              </p>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderData()}</div>;
  }
}
export default App;
