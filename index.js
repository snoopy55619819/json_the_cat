// index.js
const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error details: ', error);
  } else {
    console.log(`Descripton of ${breedName}: ${description}`);
  }
});
