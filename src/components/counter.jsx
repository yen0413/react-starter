//提示:善用react-snippets套件提供的short cut
//like: imrc , cc ...etc

import React, { Component } from "react";

class Counter extends Component {
  state = {
    //this.prop.xxx可以取得component中的attribute
    value: this.props.value,
  };

  render() {
    return (
      //如果不想要使用<div></div>包住全部的話可以用<React.Fragment></React.Fragment>來取代
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement("product")}
          className="btn btn-secondary"
        >
          Increment
        </button>
      </div>
    );
  }
  //最原始寫法應該要將事件bind進來，但這邊可以利用handleIncrement = () => {}; 箭頭函式來取代掉需要再bind的問題
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  handleIncrement = (e) => {
    //console.log("Increment Clicked!", this);
    console.log(e);
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? <h5>Zore</h5> : count;
  }
}

export default Counter;
