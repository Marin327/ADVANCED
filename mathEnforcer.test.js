const { assert } = require("chai");
const mathEnforcer = require("../mathEnforcer.js");

describe(`testing math calc methods obj`, () => {
    describe(`testing addFive method (floats allowed range +- 0.01)`, () => {
        it(`valid input positive Integer -> (0) -> 5`, () => {
            expect(mathEnforcer.addFive(0)).to.eq(5)
        })
        it(`valid input negative Integer -> (-1) -> 4`, () => {
            expect(mathEnforcer.addFive(-1)).to.eq(4)
        })
        it(`valid input float -> (0.1) -> 5.1`, () => {
            expect(mathEnforcer.addFive(0.1)).to.be.closeTo(5.1, 0.01)
        })
        it(`invalid input - not a number param -> ('a') -> undefined`, () => {
            expect(mathEnforcer.addFive('a')).to.be.undefined
        })
    })

    describe(`testing subtractTen method`, () => {
        it(`valid input positive Integer -> (10) -> 0`, () => {
            expect(mathEnforcer.subtractTen(10)).to.eq(0)
        })
        it(`valid input negative Integer-> (-1) -> -11`, () => {
            expect(mathEnforcer.subtractTen(-1)).to.eq(-11)
        })
        it(`valid input float -> (10.1) -> 0.1`, () => {
            expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.01)
        })
        it(`invalid input - not a number param -> ('a') -> undefined`, () => {
            expect(mathEnforcer.subtractTen('a')).to.be.undefined
        })
    })

    describe(`testing sum method`, () => {
        it(`valid input positive Integers -> (1,1) -> 2`, () => {
            expect(mathEnforcer.sum(1, 1)).to.eq(2)
        })
        it(`valid input negative Integers-> (-1,-1) -> -2`, () => {
            expect(mathEnforcer.sum(-1, -1)).to.eq(-2)
        })
        it(`valid input negative Int + positive Int-> (-1,1) -> 0`, () => {
            expect(mathEnforcer.sum(-1, 1)).to.eq(0)
        })
        it(`valid input float -> (1.1,2.2) -> 3.3`, () => {
            expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.01)
        })
        it(`invalid input - 1st param not a number -> ('1', 1) -> undefined`, () => {
            expect(mathEnforcer.sum('1', 1)).to.be.undefined
        })
        it(`invalid input - 2nd paramnot not a number  -> (1, '1') -> undefined`, () => {
            expect(mathEnforcer.sum(1, '1')).to.be.undefined
        })
    })
})
describe('04-math-enforcer Test Suit', () => {
    describe('addFive', () => {
        it('should return undefined for non-number input', () => {
            assert.isUndefined(mathEnforcer.addFive());
            assert.isUndefined(mathEnforcer.addFive(''));
            assert.isUndefined(mathEnforcer.addFive('1'));
        });

        it('should return correct result for positive integer param', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        })

        it('should return correct result for negative integer param', () => {
            assert.equal(mathEnforcer.addFive(-10), -5);

        });

        it('should return correct result for positive floating point param', () => {
            assert.closeTo(mathEnforcer.addFive(3.14), 8.14, 0.01);
        });
    });

    describe('subtractTen', () => {
        it('should return undefined for non-number input', () => {
            assert.isUndefined(mathEnforcer.subtractTen());
            assert.isUndefined(mathEnforcer.subtractTen(''));
            assert.isUndefined(mathEnforcer.subtractTen('1'));
        });

        it('should return correct result for positive integer param', () => {
            assert.equal(mathEnforcer.subtractTen(15), 5);
        })

        it('should return correct result for negative integer param', () => {
            assert.equal(mathEnforcer.subtractTen(-5), -15);

        });

        it('should return correct result for positive floating point param', () => {
            assert.closeTo(mathEnforcer.subtractTen(3.14), -6.86, 0.01);
        });
    });

    describe('sum', () => {
        it('should return undefined for non-number input', () => {
            assert.isUndefined(mathEnforcer.sum());
            assert.isUndefined(mathEnforcer.sum('', 1));
            assert.isUndefined(mathEnforcer.sum('1', 1));
            assert.isUndefined(mathEnforcer.sum(1, ''));
            assert.isUndefined(mathEnforcer.sum(1, '1'));
        });

        it('should return correct result for positive integer params', () => {
            assert.equal(mathEnforcer.sum(1,2), 3);
        })

        it('should return correct result for negative integer param', () => {
            assert.equal(mathEnforcer.sum(-1, -2), -3);
        });

        it('should return correct result for positive floating point param', () => {
            assert.closeTo(mathEnforcer.sum(3.14, 2.1), 5.24, 0.01);
        });
    });
});


