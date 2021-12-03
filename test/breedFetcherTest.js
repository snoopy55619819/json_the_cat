const { assert } = require('chai');
const { fetchBreedDescription } = require('../breedFetcher');

describe('#breedFetcher', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });
  it('returns an error string an invalid breed, via callback', (done) => {
    fetchBreedDescription('Siberianaaa', (err, desc) => {
      // we expect no error for this scenario
      const errorMessage = 'No data on the breed Siberianaaa.';
      assert.equal(err, errorMessage);

      const expectedDesc = '[]';

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
});