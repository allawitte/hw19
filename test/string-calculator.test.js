var assert = require('chai').assert;
var Calculator = require('../src/string-calculator');

function createCalc() {
    return new Calculator();
}
describe('String calculator should', function(){
    it('return 0 if input is empty', function(){
        var calc = createCalc();
        var sum = calc.add();
        assert.equal(sum, 0);
    });
    it('return a number if input is one number', function(){
        var calc = createCalc();
        var sum = calc.add('1');
        assert.equal(sum, 1);
    });


});

/**
 * Created by HP on 12/17/2016.
 */
