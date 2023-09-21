import {Component} from 'react'
import './index.css'

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

// Write your code here
class Capitals extends Component {
  state = {
    selectedCapital: countryAndCapitalsList[0].id,
  }

  selectedCountry = event => {
    this.setState({selectedCapital: event.target.value})
  }

  render() {
    const {selectedCapital} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1>Countries And Capitals</h1>
          <div className="capital-container">
            <select onChange={this.selectedCountry}>
              {countryAndCapitalsList.map(each => (
                <option value={each.capitalDisplayText} key={each.id}>
                  {each.country}
                </option>
              ))}
            </select>
            <p>is capital of which country?</p>
          </div>
          <p className="capital">{selectedCapital}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
