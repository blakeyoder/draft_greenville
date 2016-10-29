import React from 'react';
import Client from './Client';

const FoodSearch = React.createClass({

  getInitialState: function () {
    return {
      listings: [],
      showRemoveIcon: false,
      searchValue: '',
    };
  },

  handleSearchChange: function (e) {
    const value = e.target.value;

      this.setState({
        searchValue: value,
      });

      Client.search(value, (listing) => {
        this.setState({
          listing: listing,
        });
      });
    },

  render: function () {
    return (
      <div id='food-search'>
        <table className='ui selectable structured large table'>
          <thead>
            <tr>
              <th colSpan='5'>
                <div className='ui fluid search'>
                  <div className='ui icon input'>
                    <input
                      className='prompt'
                      type='text'
                      placeholder='Search craigslist...'
                      value={this.state.searchValue}
                      onChange={this.handleSearchChange}
                    />
                    <i className='search icon' />
                  </div>
                  {
                    this.state.showRemoveIcon ? (
                      <i
                        className='remove icon'
                        onClick={this.handleSearchCancel}
                      />
                    ) : ''
                  }
                </div>
              </th>
            </tr>
            <tr>
              <th className='eight wide'>Description</th>
              <th>Kcal</th>
              <th>Protein (g)</th>
              <th>Fat (g)</th>
              <th>Carbs (g)</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.listings.map((listing, idx) => (
              <tr
                key={idx}
                onClick={() => this.props.onFoodClick(listing)}
              >
                <td>{listing[idx].location}</td>

              </tr>
            ))
          }
        </tbody>
        </table>
      </div>
    );
  },
});

export default FoodSearch;
