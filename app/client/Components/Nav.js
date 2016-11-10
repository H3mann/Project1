var React = require( 'react';
var Search = require( '../Components/Search'
var {Link} = require( 'react-router'
 // var {Nav, Navbar, NavItem, NavDropdown, MenuItem} = require( 'react-bootstrap')

var Navigation = React.createClass ({

getInitialState: function () {
  return {searchBar:''};
},

onUpdateSearch: function (event) {
  this.setState({searchBar:event.target.value})
  console.log('searchBar',event.target.value);
},

handleSubmitsearchBar: function (event) {
  e.preventDefault()
  var searchBar = this.state.searchBar;

  this.setState({
    searchBar: ''

  })
  // this.context.router.push('/detailedWeather')
},

render: function () {
  return (
    <div>
     <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Reddit Project</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
     
    </Navbar>
      <Search onUpdateSearch={this.onUpdateSearch}
      value={this.state.searchBar}/>
    </div>
    
  );

}

})


module.exports = Navigation;
