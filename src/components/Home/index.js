// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import TeamCard from '../TeamCard/index'

class Home extends Component {
  state = {isLoading: true, teamCardList: []}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    // console.log(response)
    const data = await response.json()
    const teamsData = data.teams
    // console.log(teamsData)

    const formattedData = teamsData.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
      alt: eachItem.name,
    }))
    this.setState({teamCardList: formattedData, isLoading: false})
  }

  render() {
    const {isLoading, teamCardList} = this.state

    return (
      <div className="home-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="main-container">
            <div className="logo-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
                className="ipl-logo mr-3"
              />
              <h1 className="dashboard-heading">IPL Dashboard</h1>
            </div>
            <ul className="team-card-list-container mt-5">
              {teamCardList.map(eachTeam => (
                <TeamCard key={eachTeam.id} teamDetails={eachTeam} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
