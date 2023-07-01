const { expect } = require('chai');
const isSymmetric = require('./isSymmetric');


describe('Symmetry checker', function () {
    it('return true for symmetricis array', () => {
        const arr = [1, 2, 2, 1];
        expect(isSymmetric(arr)).to.be.true;
    });

    it('returns false for non-symmettrics array', () => {
        const arr = [1, 2, 3];
        expect(isSymmetric(arr)).to.be.false;
    });
    it('returns false with non-array argument', () => {
        const data = 121;
        expect(isSymmetric(data)).to.be.false;
    });
    it('returns true when length is odd', () => {
const arr = [1, 2, 1];
expect(isSymmetric(arr)).to.be.true;
    });

    it('returns false for array-like arguments', () => {
        const data = '1221'
        expect(isSymmetric(data)).to.be.false;
    })
});
//

console.log("TESTING");
//
const {assert} = require('chai');
const{isSymmetric} = require('../symmetry-check');

describe('Symmetry Checker', ()=>{
    it('return true if is symmetric', ()=>{
        assert.isTrue(isSymmetric([1,0,0,1]));
    });
    it('return false if is not an array', ()=>{
        assert.isFalse(isSymmetric('not array'));
    });

    it('return false if is not symmetric', ()=>{
        assert.isFalse(isSymmetric([1,2,3]));
    });

    it('return true if is symmetric odd-length', ()=>{
        assert.isTrue(isSymmetric([1,0,1]));
    });

    it('return true if is symmetric string array', ()=>{
        assert.isTrue(isSymmetric(['yes','no','yes']));
    });

    it('return true if is symmetric string array', ()=>{
        assert.isTrue(isSymmetric(['yes','no','yes']));
    });

    it('return false if is not symmetric only type is different', ()=>{
        assert.isFalse(isSymmetric([1,2,'1']));
    });
});
//

console.log("TESTING");
//

const { expect } = require('chai')
const isSymmetric = require('./check')
describe(`check if array is symmetric`, () => {
    it(`input -> [0,0] -> true`, () => {
        expect(isSymmetric([1, 1])).to.equal(true)
    })
    it(`input -> [0,1] -> false`, () => {
        expect(isSymmetric([0, 1])).to.equal(false)
    })
    it(`input -> 'a' -> false`, () => {
        expect(isSymmetric('')).to.equal(false)
    })
    it(`input -> [] -> true`, () => {
        expect(isSymmetric([1, 1, 1])).to.equal(true)
    })
    it(`input -> [1, '1'] -> false`, () => {
        expect(isSymmetric([1, '1'])).to.equal(false)
    })
})