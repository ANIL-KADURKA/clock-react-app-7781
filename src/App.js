import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    stateClock: true,
  }

  onToggleClock = () => {
    this.setState(prevState => ({
      stateClock: !prevState.stateClock,
    }))
  }

  render() {
    const {stateClock} = this.state

    return (
      <div className="app-container">
        <button
          type="button"
          onClick={this.onToggleClock}
          className="toggle-button"
        >
          {stateClock ? 'ShowClock' : 'HideClock'}
        </button>
        {stateClock && <Clock />}
      </div>
    )
  }
}

export default App
