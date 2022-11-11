const assert = require('assert');
const { expect } = require('chai');
const functions = require('../index');

describe('Globant Testing', () => {
  it('List land manager ids', () => {
    expect(functions.listLandManagerIds()).to.be.an('array');
  });
});
