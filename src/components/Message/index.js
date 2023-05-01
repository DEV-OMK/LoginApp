// Write your code here
import {Component} from 'react'
import './index.css'

class Message extends Component {
  render() {
    const {greeting, name} = this.props
    return (
      <h1 className="message">
        {greeting} {name}
      </h1>
    )
  }
}

Message.defaultProps = {
  greeting: 'Please',
  name: 'Login',
}

export default Message
