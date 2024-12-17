import './index.css'

const RepositoryItem = props => {
  const {eachLanguageDetails} = props
  const {
    imageUrl,
    forksCount,
    issuesCount,
    name,
    starsCount,
  } = eachLanguageDetails
  return (
    <li className="each-language-item">
      <img src={imageUrl} alt={name} className="language-img" />
      <h1>{name}</h1>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="star-img"
        />
        <p>{starsCount} stars</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="forks-img"
        />
        <p>{forksCount} forks</p>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="open-issus-img"
        />
        <p>{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
