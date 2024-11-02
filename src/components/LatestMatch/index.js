// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchesDetails} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    alt,
    firstInnings,
    secondInnings,
    manOfMatch,
    umpires,
  } = latestMatchesDetails

  return (
    <div className="latest-match-container">
      <div className="d-flex flex-column win-result-container">
        <p className="competingTeam-name mb-5">{competingTeam}</p>
        <p className="match-date mb-4">{date}</p>
        <p className="latest-match-small-text">{venue}</p>
        <p className="latest-match-small-text">{result}</p>
      </div>
      <img src={competingTeamLogo} alt={alt} className="competingTeam-logo" />
      <div className="d-flex flex-column text-right">
        <div className="first-innings mb-2">
          <p className="latest-match-medium-text">First Innings</p>
          <p className="latest-match-small-text">{firstInnings}</p>
        </div>
        <div className="second-innings mb-2">
          <p className="latest-match-medium-text">Second Innings</p>
          <p className="latest-match-small-text">{secondInnings}</p>
        </div>
        <div className="man-of-match mb-2">
          <p className="latest-match-medium-text">Man of the match</p>
          <p className="latest-match-small-text">{manOfMatch}</p>
        </div>
        <div className="umpire mb-2">
          <p className="latest-match-medium-text">Umpires</p>
          <p className="latest-match-small-text">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
