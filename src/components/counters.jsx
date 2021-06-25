import React, { Component } from "react";
import Counter from "./Counter";
import { FaShoppingCart } from "react-icons/fa";
class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 2 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    //console.log("Handle called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  // eslint-disable-next-line
  constructor() {
    super();
    //console.log("App - Constructer");
  }
  componentDidMount() {
    //Ajax call here
    //console.log("App - Mounted  ---Ajax can use in here!");
    this.setState({});
  }

  render() {
    //利用解構子的方式來取代this.props.onDelete這樣每句都要加props的問題
    //const { onReset, onIncrement, onDelete, counters } = this.props;

    return (
      <div style={{ textAlign: "center" }}>
        <div>
          <button onClick={this.handleReset} className="btn btn-primary m-2">
            Reset
          </button>
          <FaShoppingCart></FaShoppingCart>
          <span className="badge badge-pill badge-secondary m-2">
            {this.state.counters.filter((c) => c.value > 0).length}
          </span>
        </div>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter} //在這邊直接將counter帶入，這樣在counter頁面就可以直接使用裡面全部的key
            onDelete={this.handleDelete}
            OnIncrement={this.handleIncrement}
          >
            {/* <h4>Counter #{counter.id}</h4> */}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
