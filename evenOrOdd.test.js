
const {
    assert
} = require("chai");

const isOddOrEven = require("../evenOrOdd.js");

describe("IsOddOrEven", () => {
    it("Should return even when string legth is even", () => {
        assert.equal(isOddOrEven("even"), "even");
    });
    it("Should return odd when string legth is odd", () => {
        assert.equal(isOddOrEven("odd"), "odd");
    });
    it("Should return undefined when the input is not a string", () => {
        assert.equal(isOddOrEven(1), undefined);
    });
});
//
console.log("--------");
//
const { expect } = require('chai')
const isOddOrEven = require('./evenOrOdd.test.js/index.js')


describe(`checks if length of passed string is odd or even`, () => {
    it(`inout -> (a) -> odd`, () => {
        expect(isOddOrEven('a')).to.eq('odd')
    })
    it(`input -> aa -> even`, () => {
        expect(isOddOrEven('aa')).to.eq('even')
    })
    it(`input -> 1 -> undefined`, () => {
        expect(isOddOrEven(1)).to.eq(undefined)
    })
    it(`input -> [a,a] -> undefined`, () => {
        expect(isOddOrEven(['a', 'a'])).to.eq(undefined)
    })
});
//
console.log("----------");
//

const {assert} = require('chai');
const {isOddOrEven} = require('..test.j');

describe('02-even-or-odd Test Suit', ()=>{
    it('even is even string',()=>{
        assert.equal( isOddOrEven('even'),'even');
    });

    it('odd is odd string',()=>{
        assert.equal( isOddOrEven('odd'),'odd');
    });

    it('empty string is even string',()=>{
        assert.equal( isOddOrEven(''),'even');
    });

    it('no string is undefined',()=>{
        assert.isUndefined( isOddOrEven());
    });

    it('1 is undefined',()=>{
        assert.isUndefined( isOddOrEven(1));
    });
});
