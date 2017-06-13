var React = require("react");

var API = require("../utils/API");

var Results = React.createClass({

	handleClick: function(item){
    API.favoriteQuote(item).then(function(){
      console.log("favorited a quote");
    });
  },

  render: function(){
    return this.props.results.map(function(quote, index){
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
                    <div key={index}>
                      <li className="list-group-item">
                        <h3>
                          <span>
                            <em>{quote.text}</em>
                          </span>
                          <span className="btn-group pull-right">
                            <button className="btn btn-primary" onClick= {() => this.handleClick(quote)}>Favorite</button>
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