import React from 'react';

class Beer extends React.Component {
  constructor(props){
    super();
  }
  render() {
    return (
        <div>
        {this.props.data.beers.items.map(function(beer_data, index) {
          return (
            <div key={index} className="ui card">
              <div className="content">
                <a className="header">Kristy</a>
                <div className="meta">
                  <span className="date">Joined in 2013</span>
                </div>
                <div className="description">
                  <h1> Hello {beer_data.beer.beer_name}</h1>
                </div>
              </div>
              <div className="extra content">
                <a>
                  <i className="user icon"></i>
                  22 Friends
                </a>
              </div>
            </div>
          )
      })}
    </div>
    )
  }
};

export default Beer;
