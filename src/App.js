import React, { Component } from 'react'
import './App.css';

class App extends React.Component {
  state = {
    count: 0,
  }

  add(){
    this.setState({
      count: this.state.count + 1
    })
  }

  remove(){
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    return (
      <div className="App">
        <h2>Counter App</h2>
        <p>The count is: {this.state.count}</p>

        <button onClick={()=> this.add()}>Add</button>
        <button onClick={()=> this.remove()}>Remove</button>
      </div>
    );
  }
}

export default App;
