function sum (a, b) {
    return a - b;
}

describe('Main test', function() {
    it('works with whole numbers', function() {

       if(sum(3, 5) != 8) {
        throw new Errowr('Incorrect sum')
       }
    });
});
