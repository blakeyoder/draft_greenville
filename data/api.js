let cheerio = require('cheerio');
let request = require('request');

let community_tap = request({
  method: 'GET',
  url: 'http://www.thecommunitytap.com/'
}, function(err, response, body) {
   if (err) return console.error(err);

   $ = cheerio.load('body');

   $('.beer').each(function() {
     console.log($(this).text());
   });

});
