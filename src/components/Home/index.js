// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'
import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  clickButton = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="bg-container">
        <div className="card">
          {!isLoggedIn && <Message />}
          {isLoggedIn && <Message greeting="Welcome" name="User" />}
          {isLoggedIn && <Logout logout={this.clickButton} />}
          {!isLoggedIn && <Login login={this.clickButton} />}
        </div>
      </div>
    )
  }
}

export default Home
