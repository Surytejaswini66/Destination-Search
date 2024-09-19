// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem'
class DestinationSearch extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">Destination Search</h1>
        <div>
          <input className="searchBox" type="search" />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="searchIcon"
          />
        </div>
        <ul>
          {destinationsList.map(eachTodo => {
            ;<DestinationItem namee={eachTodo.name} image={eachTodo.imgUrl} />
          })}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
