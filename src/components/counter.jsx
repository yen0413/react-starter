//提示:善用ES7 React/Redux/GraphQL/React-Native snippets套件提供的short cut
//like: imrc ,rafce...etc

import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    //console.log("prevProps", prevProps);
    //console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //藉由比較舊的Props的值與現在的Props的值來判斷是否要更新data
      //Ajax call and get new data from server here
    }
  }

  componentWillUnmount() {
    //console.log("Counter - Unmount");
    //藉由React比較出Dom有元素被移除，在此處可以執行清空暫存or相關事件
  }

  render() {
    return (
      //如果不想要使用<div></div>包住全部的話可以用<React.Fragment></React.Fragment>或<></>來取代
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.OnIncrement(this.props.counter)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  //最原始寫法應該要將事件bind進來，但這邊可以利用handleIncrement = () => {}; 箭頭函式來取代掉需要再bind的問題
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }
  // handleIncrement = (e) => {
  //   //console.log("Increment Clicked!", this);
  //   //console.log(e);
  //   this.setState({ value: this.state.value + 1 });
  // };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? <h5>Zore</h5> : value;
  }
}

export default Counter;
