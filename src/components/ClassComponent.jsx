import React, { Component } from "react"

class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    return (
      <div className="p-4 border rounded-xl shadow-md mt-4">
        <h2>Class Component</h2>
        <p>Count: {this.state.count}</p>
        <button 
          onClick={this.increment} 
          className="px-3 py-1 bg-green-500 text-white rounded-lg mt-2"
        >
          Increment
        </button>
      </div>
    )
  }
}

export default ClassComponent
