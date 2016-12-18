var assert = require('chai').assert;
var Calculator = require('../src/string-calculator');
describe('String calculator should', function(){
    it('return 0 if input is empty', function(){
        var calc = new Calculator();
        var sum = calc.add();
        assert.equal(sum, 0);
    });
});

/**
 * Created by HP on 12/17/2016.
 */
