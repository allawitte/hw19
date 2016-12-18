var assert = require('chai').assert;
var Calculator = require('../src/string-calculator');

function createCalc() {
    return new Calculator();
}
describe('String calculator should', function(){
    it('return 0 if input is empty', function(){
        var calc = createCalc();
        var sum = calc.intAdd();
        assert.equal(sum, 0);
    });
    it('return a number if input is one number', function(){
        var calc = createCalc();
        var sum = calc.intAdd('1');
        assert.equal(sum, 1);
    });
    it('return summ from 1 to 3 numbers', function(){
        var calc = createCalc();
        var sum = calc.intAdd("2,12,123");
        assert.equal(sum, 137);
    })


});

/**
 * Created by HP on 12/17/2016.
 */
