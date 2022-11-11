const assert = require('assert');
const { expect } = require('chai');
const functions = require('../index');

describe('Globant Testing', () => {
  it('List land manager ids', () => {
    expect(functions.listLandManagerIds()).to.be.an('array');
  });

  it('List land Managers by Name', () => {
    expect(functions.listLandManagersByName()).to.be.an('array');
  });

  it('sort land type by total area', () => {
    expect(functions.sortLandTypeByTotalArea()).to.be.an('array');
  });

  it('sort land manager by admin area', () => {
    expect(functions.sortLandManagerByAdminArea()).to.be.an('array');
  });

  it('farm manager names', () => {
    expect(functions.farmManagerNames()).to.be.an('object');
  });

  it('Biggest apple farms', () => {
    expect(functions.biggestAppleFarms()).to.be.an('array');
  });

  it('Biggest orange managers', () => {
    expect(functions.biggestOrangesManagers()).to.be.an('array');
  });

  it('Farm manager lands', () => {
    expect(functions.farmManagerLands()).to.be.an('object');
  });

  it('Lands Managers', () => {
    expect(functions.landsManagers()).to.be.an('object');
  });
});
