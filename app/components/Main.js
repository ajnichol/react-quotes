import React from "react";

var AddQuote = require("./addQuote");
var Results = require("./results");

var API = require("../utils/API");

var Link = require("react-router").Link;

var Main = React.createClass({

	getInitialState: function(){
		return {
			results: {}
		};
	},

	setQuote: function(quote){
		API.saveQuote(quote).then(function(response){
			this.setState({results: {doc: response}});
		}.bind(this));
	},

	render: function() {

		return(

		  // We can only render a single div. So we need to group everything inside of this main-container one
	      <div className="main-container">
	        <div className="container">
	          {/* Navbar */}
	          <nav className="navbar navbar-default" role="navigation">
	            <div className="container-fluid">
	              <div className="navbar-header">
	                <button
	                  type="button"
	                  className="navbar-toggle"
	                  data-toggle="collapse"
	                  data-target=".navbar-ex1-collapse"
	                >
	                  <span className="sr-only">Toggle navigation</span>
	                  <span className="icon-bar"></span>
	                  <span className="icon-bar"></span>
	                  <span className="icon-bar"></span>
	                </button>
	                <Link className="navbar-brand" to="/">NYT-React</Link>
	              </div>

	              <div className="collapse navbar-collapse navbar-ex1-collapse">
	                <ul className="nav navbar-nav navbar-right">
	                  {/* Using <Link> in place of <a> and "to" in place of "href" */}
	                  <li><Link to="/search">Search</Link></li>
	                  <li><Link to="/saved">Saved Quotes</Link></li>
	                </ul>
	              </div>
	            </div>
	          </nav>

	          {/* Jumbotron */}
	          <div className="jumbotron">
	            <h2 className="text-center"><strong>Write, Save, and Favorite Quotes</strong></h2>
	            <h3 className="text-center">Create Your Favorite Quotes and Save Them.</h3>
	          </div>

	          <AddQuote updateQuote={this.setQuote} />
	          <Results results={this.state.results} />


	          <footer>
	            <hr />
	            <p className="pull-right">
	              <i className="fa fa-github" aria-hidden="true"></i>
	              Proudly built using React.js
	            </p>
	          </footer>
	        </div>
	      </div>

		)
	}
})

export default Main;
