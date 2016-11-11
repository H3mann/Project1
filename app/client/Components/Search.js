var React = require( 'react');
var Router = require('react-router');
var Link = Router.Link;

function Search (props) {

return (
<div>
	<form onSubmit={props.handleSubmitLocation}>
	   <div className="search-bar form-inline">
	    <input className="form-control" 
	    type="text" 
	    onChange={props.onUpdateSearch}
	    value={props.searchBar}/>
	    <Link to={'/subReddit/' + props.searchBar}>
	    <button className="btn hidden-sm-down" type='submit'>
	      <span className="glyphicon glyphicon-search"></span>
	    </button>
	      </Link>
	  </div> 
	 </form>
</div>

 )
};

module.exports = Search