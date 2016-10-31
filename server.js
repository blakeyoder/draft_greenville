const express = require('express');
const app = express();
const cheerio = require('cheerio');
const request = require('request');
const venue = require ('venuelist');

app.set('port', (process.env.API_PORT || 3001));

// forcing calls to be of the format api/venue_details?name=tct
app.get('/api/venue_details', (req, res) => {
  const param = req.query.name;

  if (!param) {
    res.json({
      error: 'Missing required parameter `name`',
    });
    return;
  }

  venue.getVenueDetails(param, console.log);
  
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
