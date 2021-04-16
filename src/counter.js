import React, { Component } from 'react'
import { connect } from 'react-redux';
import './App.css';


class Counter extends React.Component {
  add(){
    this.props.dispatch({type: 'INCREMENT'});
  }

  remove(){
    this.props.dispatch({ type: 'DECREMENT'});
  }

  render() {
    return (
      <div className="App">
        <h2>Counter App</h2>
        <p>The count is: {this.props.count}</p>

        <button onClick={()=> this.add()}>Add</button>
        <button onClick={()=> this.remove()}>Remove</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  }
}

// export default Counter;
export default connect(mapStateToProps)(Counter);
