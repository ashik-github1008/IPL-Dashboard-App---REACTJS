// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  // console.log(matchCardDetails)
  const {competingTeamLogo, alt, competingTeam, result, matchStatus} =
    matchCardDetails

  const statusClassName =
    matchStatus === 'Lost' ? 'match-card-status-lost' : 'match-card-status-win'

  return (
    <li className="match-card-container mr-5 mb-5">
      <img src={competingTeamLogo} alt={alt} className="matchcard-logo mb-4" />
      <p className="match-card-team mb-5">{competingTeam}</p>
      <p className="match-card-result mb-5">{result}</p>
      <p className={statusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
