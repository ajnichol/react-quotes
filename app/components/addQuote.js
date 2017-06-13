var React = require("react");

var API = require("../utils/API");

var AddQuote = React.createClass({

	getInitialState: function(){
		return {quoteAdded: ""};
	},

	handleChange: function(event){
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},

	handleSubmit: function(event){
		event.preventDefault();
		this.props.updateQuote(this.state.quoteAdded);
	},

	render: function(){
		return(
		      <div className="main-container">

		        <div className="row">
		          <div className="col-lg-12">

		            <div className="panel panel-primary">
		              <div className="panel-heading">
		                <h1 className="panel-title">
		                  <strong>
		                    <i className="fa fa-newspaper-o" aria-hidden="true"></i> Add A Quote
		                  </strong>
		                </h1>
		              </div>
		              <div className="panel-body">
			              <form onSubmit={this.handleSubmit}>
		                  	<div className="form-group">
		                    	<h4 className=""><strong>Topic</strong></h4>
			                    <input
			                      type="text"
			                      value={this.state.quoteAdded}
			                      className="form-control"
			                      id="search"
			                      onChange={this.handleChange}
			                      required
			                    />
			                    <div className="pull-right">
                    				<button type="submit" className="btn btn-danger">
                      					<h4>Submit</h4>
                    				</button>
                  				</div>
		                    </div>
		                  </form>
		                  </div>
	              		</div>
	            	</div>
	          	</div>
	        </div>
		);
	}
});

module.exports = AddQuote;