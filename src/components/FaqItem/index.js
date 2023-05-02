import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    condition: false,
  }

  onClickButton = () => {
    this.setState(prevState => ({
      condition: !prevState.condition,
    }))
  }

  render() {
    const {faqItem} = this.props
    const {questionText, answerText} = faqItem
    const {condition} = this.state
    let answer
    if (condition) {
      answer = <p className="answer">{answerText}</p>
    }
    return (
      <li className="item-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" onClick={this.onClickButton} className="button">
            {condition ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png "
                alt="minus-icon"
                className="button-icon"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png "
                alt="plus-icon"
                className="button-icon"
              />
            )}
          </button>
        </div>
        {answer}
      </li>
    )
  }
}
export default FaqItem
