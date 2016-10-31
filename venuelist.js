let rp = require('request-promise');
let cheerio = require('cheerio');

/**
 usage:

 var vl = require('./venuelist');
 vl.getVenueDetails('tct', console.log)
 vl.getVenues({}, console.log)
 */


let VENUES = {
  "tct": {
    "name": "The Community Tap",
    "uri": "http://thecommunitytap.com",
    parse_beer_list: ($) => {
      return $("div.beer", "div.view-pouring-now.view-display-id-beers_tap")
        .map((ndx, ele) => ({
          'brewery': $(ele).children('.brewery').text().trim(),
          'name' : $(ele).clone().children().remove().end().text().trim(),
          'urls' : $(ele)
            .children('.brewery-links-container')
            .children('.brewery-links')
            .children('.link')
            .map((n, e) => $(e).attr('data-url'))
            .get()
            .filter((ele) => typeof ele === 'string' && ele !== '')
        }))
        .get()
    }
  }
};


let getVenues =  function(options, callback){
  let p = new Promise(function(resolve=callback, reject){

    let res = Object.keys(VENUES).map((key) => ({
      "id": key,
      "name": VENUES[key].name,
      "uri": VENUES[key].uri,
    }))

    resolve(res);
  });

  return p;
}


let getVenueDetails = function(venueID, callback){
  let v = VENUES[venueID];
  let options = {
    uri: v.uri,
    transform: function(body){
      return cheerio.load(body);
    }
  };

  rp(options)
    .then(function($){
      callback(v.parse_beer_list($));
    });

}

module.exports = { getVenues, getVenueDetails };
