// Write your code here
import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    // this.setState(prevState => ({count: prevState.count + 1}))
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>
            The Button has been clicked
            <span> {count} </span>
            times
          </h1>
          <p>Click the button to increase the count!</p>
          <div>
            <button type="submit" className="button" onClick={this.onIncrement}>
              Click Me!
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ClickCounter
