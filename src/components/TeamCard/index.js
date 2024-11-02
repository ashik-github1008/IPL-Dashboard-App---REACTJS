// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
import {Component} from 'react'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {name, alt, teamImageUrl, id} = teamDetails

    return (
      <Link to={`/team-matches/${id}`} className="team-card-link">
        <li className="teamcard-container mr-4 mb-4">
          <img src={teamImageUrl} alt={alt} className="team-logo" />
          <p className="team-name">{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
