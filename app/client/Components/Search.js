var React = require( 'react');
var Nav = require('../Components/Nav')

function Search (props) {

return (
   <div className="search-bar form-inline">
    <input className="form-control" 
    type="text" 
    onChange={props.onUpdateSearch}
    value={props.searchBar}/>
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
 )
};

module.exports = Search