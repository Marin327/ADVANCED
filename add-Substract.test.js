
const {assert} = require('chai');
const {createCalculator} = require('../add-subtract');

describe('Calculator Test Suit', ()=>{
    it('Contains add(), subtract() and get()', ()=>{
        const calculator = createCalculator();
        assert.isTrue(calculator.hasOwnProperty('add'));
        assert.isTrue(calculator.hasOwnProperty('subtract'));
        assert.isTrue(calculator.hasOwnProperty('get'));
    });

    it('Initial status is 0', ()=>{
        const calculator = createCalculator();
        assert.equal(calculator.get(), 0);
    });

    it('Add 1 and 2 result is 3', ()=>{
        // arrange
        const calculator = createCalculator();

        //act & assert
        calculator.add(1);
        assert.equal(calculator.get(), 1);

        calculator.add(2);
        assert.equal(calculator.get(), 3);
    });

    it('Add "1" and "2" result is "3"', ()=>{
        // arrange
        const calculator = createCalculator();

        //act & assert
        calculator.add('1');
        assert.equal(calculator.get(), 1);

        calculator.add('2');
        assert.equal(calculator.get(), 3);
    });

    it('Subtract 1 and 2 from 10 result is 7', ()=>{
        // arrange
        const calculator = createCalculator();
        calculator.add(10);

        //act & assert
        calculator.subtract(1);
        assert.equal(calculator.get(), 9);

        calculator.subtract(2);
        assert.equal(calculator.get(), 7);
    });

    it('Subtract "1" and "2" from 10 result is 7', ()=>{
        // arrange
        const calculator = createCalculator();
        calculator.add(10);

        //act & assert
        calculator.subtract('1');
        assert.equal(calculator.get(), 9);

        calculator.subtract('2');
        assert.equal(calculator.get(), 7);
    });
});

//
console.log("TESTING");
//
const { expect } = require('chai')
const createCalculator = require('./addSubtract')

describe(`testing calculator functionality`, () => {
    it(`returns an object`, () => {
        expect(typeof createCalculator()).to.equals('object')
    })
    it(`return obj has method add`, () => {
        expect(createCalculator().add()).to.equals('yes')
    })
    it(`return obj has method subtract`, () => {
        expect(typeof createCalculator().subtract).to.equals('function')
    })
    it(`return obj has method get`, () => {
        expect(typeof createCalculator().get).to.equals('function')
    })
    it(`internal sum cannot be modified`, () => {
        expect(createCalculator().value).to.equals(undefined)
    })
    it(`add method adds parsable input`, () => {
        const calc = createCalculator()
        calc.add('1')
        expect(calc.get()).to.equals(1)
    })
    it(`subtract method subtracts parsable input`, () => {
        const calc = createCalculator()
        calc.add('2')
        calc.subtract('1')
        expect(calc.get()).to.equals(1)
    })
})