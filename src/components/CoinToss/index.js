// Write your code here
import './index.css'
import {Component} from 'react'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {toss: 0, head: 0, coinImage: headImage}

  onToss = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prev => ({head: prev.head + 1}))
    } else {
      this.setState(prev => ({toss: prev.toss + 1}))
      this.setState({coinImage: tailsImage})
    }
    return tossResult
  }

  render() {
    const {toss, head, coinImage} = this.state

    return (
      <div className="app-container">
        <div className="container">
          <h1 className="head">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img className="image" alt="toss result" src={coinImage} />
          <button className="button" type="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="count">
            <p className="count-head">Total: {head + toss}</p>
            <p className="count-head">Heads: {head}</p>
            <p className="count-head">Tails: {toss}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
