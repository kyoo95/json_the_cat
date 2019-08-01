const request = require('request');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

const fetchBreedDescription = function(breedName, callback) {
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, JSON.parse(body));
    }
  });
};

module.exports = { fetchBreedDescription };

