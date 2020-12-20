import { FiSearch } from 'react-icons/fi'
import Dropdown from '../Dropdown'

const SearchBar = () => {
  return (
    <div className="search-wrapper">
      <div className="form-inline input-group">
        <span className="input-group-prepend">
          <button className="btn btn-light with-icon">
            <FiSearch />
          </button>
        </span>
        <input className="form-control border-0 bg-light form-control-lg" />
        {
          false && (
            <Dropdown buttonText="Filter" align="dropdown-menu-right" toggle={false} className="d-none">
              <button className="dropdown-item">Action</button>
              <button className="dropdown-item">Another action</button>
              <button className="dropdown-item">Something else here</button>
            </Dropdown>
          )
        }
      </div>
    </div>
  )
}
export default SearchBar