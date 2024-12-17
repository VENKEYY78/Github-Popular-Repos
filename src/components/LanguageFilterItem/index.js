import './index.css'

const LanguageFilterItem = props => {
  const {eachLanguageTab, clickLanguageTab} = props
  const {language, id} = eachLanguageTab

  const onClickLanguageTab = () => {
    clickLanguageTab(id)
  }

  return (
    <li className="language-list-item">
      <button className="button" type="button" onClick={onClickLanguageTab}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
