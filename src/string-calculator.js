class Calculator {
    constructor(numbers) {
        this.defaultValue = 0;
        this.isInputNumber = function(val){
            return (typeof(+val) == "number" && !Number.isNaN(+val))
        };
    }

    intAdd(numbers) {
        if (!numbers) {
            return this.defaultValue;
        }
        if (this.isInputNumber(numbers)) {
            return parseInt(numbers, 10);
        }
        else {
            var numsArr = numbers.split(',');
            return numsArr.reduce(function(a,b){
                return +a+(+b);
            })
        }
    }
}
module.exports = Calculator;
/**
 * Created by HP on 12/17/2016.
 */
