import React, { Component } from "react";
import CounterComponent from "./counterComponent";

class Counters extends Component {
  render() {
    const { onReset, counters, onIncrement, onDelete } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <CounterComponent
            key={counter.id}
            onIncrement={onIncrement}
            onDelete={onDelete}
            onReset={onReset}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
