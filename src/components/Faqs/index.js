import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <div className="card-container">
        <h1 className="main-heading">FAQs</h1>
        <ul className="lists-container">
          {faqsList.map(eachItem => (
            <FaqItem faqItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
