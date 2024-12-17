import {Component} from 'react'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    languagesList: [],
    activeTabId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getGithubPopularRepos()
  }

  onClickLabguageTag = id => {
    this.setState({
      activeTabId: id,
    })
  }

  renderLanguageFilterItem = () => (
    <ul className="laguage-filter-container">
      {languageFiltersData.map(eachLanguageTab => (
        <LanguageFilterItem
          eachLanguageTab={eachLanguageTab}
          key={eachLanguageTab.id}
          clickLanguageTab={this.onClickLabguageTag}
        />
      ))}
    </ul>
  )

  getGithubPopularRepos = async () => {
    //  const {languagesList} = this.state
    const ApiUrl = 'https://apis.ccbp.in/popular-repos'
    const response = await fetch(ApiUrl)
    const data = await response.json()
    // console.log(data.popular_repos)
    const formattedData = data.popular_repos.map(eachItem => ({
      imageUrl: eachItem.avatar_url,
      forksCount: eachItem.forks_count,
      issuesCount: eachItem.issues_count,
      name: eachItem.name,
      starsCount: eachItem.stars_count,
    }))
    this.setState({
      languagesList: formattedData,
    })
  }

  render() {
    const {languagesList} = this.state
    // console.log(languagesList)
    return (
      <>
        <div className="app-main-container">
          <h1 className="main-heading">Popular</h1>
          <div>{this.renderLanguageFilterItem()}</div>
          <ul className="list-of-languages">
            {languagesList.map(eachLanguageItem => (
              <RepositoryItem
                eachLanguageDetails={eachLanguageItem}
                key={eachLanguageItem.id}
              />
            ))}
          </ul>
        </div>
      </>
    )
  }
}

export default GithubPopularRepos
