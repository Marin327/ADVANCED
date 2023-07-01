const { assert } = require("chai");
const lookupChar  = require("../charLookup.js");

describe('LookUpChar', () => {
    it('Should return undefiend if first arg is a not a string', () => {
  assert.equal(lookupChar(1,1), undefined);
    })
    it('Should return undefiend if second arg is not a an integer', () => {
        assert.equal(lookupChar('string', 1.5), undefined);
});
it('Should return undefiend if second arg is a not correct', () => {
    assert.equal(lookupChar('test', 'test'), undefined);
});
it('Should return "Incorrect index" if index is lower than zero', () => {
    assert.equal(lookupChar('test', -1), "Incorrect index");
});
it('Should return "Incorrect index" if index is outside of the boundry of the array', () => {
    assert.equal(lookupChar('test', 10), "Incorrect index");
});
it('Should return correct character at index 0', () => {
    assert.equal(lookupChar('test', 0), "t");
});
it('Should return the correct character if the index is the last of the length', () => {
    assert.equal(lookupChar('test', 3), "t");
});
it('Should return the correct character', () => {
    assert.equal(lookupChar('string', 0), "s");
});
it('Should return the correct character', () => {
    assert.equal(lookupChar('Pesho', 4), "o");
});
});
