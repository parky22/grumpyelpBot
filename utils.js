require('./.secrets');

const YELP_ACCESS_TOKEN = process.env.YELP_ACCESS_TOKEN;

const createYelpRequest = (location, term) => (
  {
    uri: 'https://api.yelp.com/v3/businesses/search',
    qs: {
      location: location,
      term: term,
      limit: 2
    },
    auth: {
      bearer: YELP_ACCESS_TOKEN
    },
    method: 'GET',
    json: true
  }
);

module.exports = createYelpRequest;