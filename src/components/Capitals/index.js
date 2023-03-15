import {Component} from 'react'
import './index.css'

// eslint-disable-next-line
const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  onCapitalChange = event => {
    this.setState({activeId: event.target.value})
  }

  getCountry = () => {
    const {activeId} = this.state

    const findCountry = countryAndCapitalsList.find(
      each => each.id === activeId,
    )

    return findCountry.country
  }

  render() {
    const {activeId} = this.state
    const Country = this.getCountry(activeId)

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="selectCapital">
            <select
              onChange={this.onCapitalChange}
              value={activeId}
              className="select"
            >
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="para">is capital of which country?</p>
          </div>
          <h1 className="county">{Country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
