// Write your code here
import {Component} from 'react'
import './index.css'

const HEAD_IMAGE = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_IMAGE = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, tossResultImage: HEAD_IMAGE}

  onClickTossButton = () => {
    const {headsCount, tailsCount} = this.state

    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let headsCountResult = headsCount
    let tailsCountResult = tailsCount

    if (tossResult === 0) {
      tossImage = HEAD_IMAGE
      headsCountResult += 1
    } else {
      tossImage = TAIL_IMAGE
      tailsCountResult += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: headsCountResult,
      tailsCount: tailsCountResult,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="title">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt=" toss result"
            className="toss-result-image"
          />
          <button
            type="button"
            className="button"
            onClick={this.onClickTossButton}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
