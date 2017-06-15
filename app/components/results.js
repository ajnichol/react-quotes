var React = require("react");

var API = require("../utils/API");

var Results = React.createClass({

  getInitialState: function(){
    return {dbQuotes: ""};
  },

  componentDidMount: function(){
    API.getQuotes().then(function(allQuotes){
      this.setState({dbQuotes: allQuotes});
    }.bind(this));
  },

  handleDelete: function(destroyQuote){
    var quoteId = destroyQuote._id;
    API.deleteQuote(quoteId).then(function(){
      console.log("quote deleted");
      API.getQuotes().then(function(revisedQuotes){
        this.setState({dbQuotes: revisedQuotes});
        console.log("database quotes updated");
      }.bind(this));
    }.bind(this));
  },

	handleClick: function(favoriteQuote){
    API.favoriteQuote(favoriteQuote).then(function(){
      console.log("favorited a quote");
    });
  },

  render: function(){
    return this.props.results.docs.map(function(quote, index){
      return(
        <div className="main-container">
          <div className="row">
            <div className="col-lg-12">
              <div className="panel panel-primary">
                <div className="panel-heading">
                  <h1 className="panel-title">
                    <strong>
                      <i className="fa fa-list-alt"></i>
                      Quotes
                    </strong>
                  </h1>
                </div>
                <div className="panel-body">
                  <ul className="list-group">
                    <div>
                      <li className="list-group-item">
                        <em>{this.state.dbQuotes}</em>
                      </li>
                    </div>
                    <div key={index}>
                      <li className="list-group-item">
                        <h3>
                          <span>
                            <button onClick = {() => this.handleClick(quote)}><i class="fa fa-star-o" aria-hidden="true"></i></button>
                          </span>
                          <span>
                            <em>{quote.text}</em>
                          </span>
                          <span className="btn-group pull-right">
                            <button onClick = {() => this.handleDelete(quote)}><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                          </span>
                        </h3>
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }.bind(this));
  }
});

module.exports = Results;