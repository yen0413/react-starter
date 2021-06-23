import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //利用解構子的方式來取代this.props.onDelete這樣每句都要加props的問題
    const { onReset, onIncrement, onDelete, counters } = this.props;

    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter} //在這邊直接將counter帶入，這樣在counter頁面就可以直接使用裡面全部的key
            onDelete={onDelete}
            OnIncrement={onIncrement}
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
