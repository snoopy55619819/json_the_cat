const request = require('request');

const breedFetcher = () => {
  const breed = process.argv[2];
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

  request(url, (error, response, body) => {
    if (error) {
      console.log(`Error: ${error}`);
    } else if (body === '[]') {
      console.log(`No data on the breed ${breed}.`);
    } else {
      const data = JSON.parse(body);
      console.log(`Descripton of ${breed}: `, data[0]['description']);
      console.log(typeof data);
    }
  });
};

breedFetcher();