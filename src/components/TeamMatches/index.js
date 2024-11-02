// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import LatestMatch from '../LatestMatch/index'
import MatchCard from '../MatchCard/index'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    teamBannerUrl: '',
    latestMatchesDetails: {},
    recentMatches: [],
  }

  componentDidMount() {
    this.getTeamMatchesData()
  }

  getTeamMatchesData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log(data)
    const teamBannerUrl = data.team_banner_url
    const latestMatchesDetails = data.latest_match_details
    const recentMatches = data.recent_matches

    // console.log(teamBannerUrl);
    // console.log(latestMatchesDetails);
    // console.log(recentMatches);

    const formattedLatestMacthesDetails = {
      id: latestMatchesDetails.id,
      competingTeam: latestMatchesDetails.competing_team,
      date: latestMatchesDetails.date,
      venue: latestMatchesDetails.venue,
      result: latestMatchesDetails.result,
      competingTeamLogo: latestMatchesDetails.competing_team_logo,
      alt: `latest match ${latestMatchesDetails.competing_team}`,
      firstInnings: latestMatchesDetails.first_innings,
      secondInnings: latestMatchesDetails.second_innings,
      manOfMatch: latestMatchesDetails.man_of_the_match,
      umpires: latestMatchesDetails.umpires,
    }

    const formattedRecentMatches = recentMatches.map(eachMatch => ({
      id: eachMatch.id,
      competingTeamLogo: eachMatch.competing_team_logo,
      alt: `competing team ${eachMatch.competing_team}`,
      competingTeam: eachMatch.competing_team,
      result: eachMatch.result,
      matchStatus: eachMatch.match_status,
    }))

    // console.log(formattedLatestMacthesDetails)
    // console.log(formattedRecentMatches)

    this.setState({
      isLoading: false,
      teamBannerUrl: teamBannerUrl,
      latestMatchesDetails: formattedLatestMacthesDetails,
      recentMatches: formattedRecentMatches,
    })
  }

  render() {
    const {isLoading, latestMatchesDetails, recentMatches, teamBannerUrl} =
      this.state
    const {match} = this.props
    const {params} = match
    const {id} = params

    // console.log(recentMatches)

    return (
      <div className={`TeamMatches-container ${id}`}>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="latest-match-main-container">
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <div className="d-flex flex-column mt-5 w-100">
              <p className="latest-matches-heading-text">Latest Matches</p>
              <LatestMatch
                latestMatchesDetails={latestMatchesDetails}
                key={latestMatchesDetails.id}
              />
            </div>
            <ul className="match-card-list-container W-100 mt-5">
              {recentMatches.map(eachMatch => (
                <MatchCard key={eachMatch.id} matchCardDetails={eachMatch} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
