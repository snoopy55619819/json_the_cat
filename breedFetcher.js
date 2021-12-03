const request = require('request');

const fetchBreedDescription = (breed, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  
  request(url, (error, response, body) => {
    const data = JSON.parse(body);
    let description = '[]';

    if (body === '[]') {
      error = `No data on the breed ${breed}.`;
    } else {
      description = data[0]['description'];
    }
    callback(error, description);
  });
};

module.exports = {
  fetchBreedDescription
};