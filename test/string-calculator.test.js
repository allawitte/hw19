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
    it('return summ of any amount of numbers', function(){
        var calc = createCalc();
        var sum = calc.intAdd('2,3,12,10,222');
        assert.equal(sum,249);
    });
    it('returns summ of any numbers where delimiter can be , and \\n', function(){
        var calc = createCalc();
        var sum = calc.intAdd('2,3\n7');
        assert.equal(sum, 12);
    })
    it('returns 0 if delimeter is ,\\n', function(){
        var calc = createCalc();
        var sum = calc.intAdd('1,\\n');
        assert.equal(sum,0);
    })
        it('returns 3 if delimetrs are ; or ;\\n and beginning //', function(){
            var calc = createCalc();
            var sum = calc.intAdd('//;\n1;2');
            assert.equal(sum, 3);
        })

});

/**
 * Created by HP on 12/17/2016.
 */
