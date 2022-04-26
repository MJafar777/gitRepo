import React from "react";

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  myturnOn() {
    let circle = document.querySelector(".statusOne");
    circle.classList.toggle("onOff");
    circle.style.color = "black";
    document.querySelector(".userName").style.color = "black";
    document.querySelector(".icon1").style.color = "black";
    document.querySelector(".icon2").style.color = "black";
    document.querySelector(".icon3").style.color = "black";
    document.querySelector(".icon4").style.color = "black";
    document.querySelector(".info").style.color = "black";
    document.querySelector(".btnone").style.color = "white";
    document.querySelector(".btnone").style.backgroundColor = "black";
    document.querySelector(".btnTwo").style.color = "black";
    document.querySelector(".btnTwo").style.border = "2px solid black";
  }
  render() {
    return (
      <div className="container">
        <div className="Menu">
          <div onClick={this.myturnOn} className="circle"></div>
          <div className="menu"></div>
        </div>
        <div className="box__left">
          <div className="statusDev">
            <div className="statusOne onOff">
              <h2 className="userName">MJafar</h2>
              <div className="gridHome">
                <div className="icons">
                  <a href="https://github.com/MJafar777" className="iconUrl">
                    <i className="github icon icon1"></i>
                  </a>
                  <a href="t.me/uzb773767" className="iconUrl">
                    <i className="telegram icon icon2"></i>
                  </a>
                  <a
                    href="https://instagram.com/jafar_37_67?igshid=YmMyMTA2M2Y="
                    className="iconUrl"
                  >
                    <i className="instagram icon icon3"></i>
                  </a>
                  <a href="https://twitter.com/?lang=ru" className="iconUrl">
                    <i className="twitter icon icon4"></i>
                  </a>
                </div>
                <div className="info">
                  <p className="txtUser txtUser1">I'm M.Jafar </p>
                  <b className="txtUser">I develop website fullstack</b>
                  <p className="lorem">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis, quod eveniet similique delectus rem dolor alias
                    mollitia enim veritatis corpor
                  </p>
                  <div className="btnUser">
                    <button className="btnone btn">My Portfolio</button>
                    <button className="btnTwo btn">Contact Me</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="statusTwo"></div>
          </div>
        </div>
        <div className="box__right"></div>
      </div>
    );
  }
}

export default HomeComponent;
