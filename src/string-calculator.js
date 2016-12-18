class Calculator {
    constructor(numbers) {
        this.defaultValue = 0;
        this.isInputNumber = function(val){
            return (typeof(+val) == "number" && !Number.isNaN(+val))
        };
        this.stringToNum = function(val){
            return +val;
        }
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
            return numsArr.reduce((a,b)=>{
                return (this.stringToNum(a)+this.stringToNum(b));
            });
        }
    }
}
module.exports = Calculator;
/**
 * Created by HP on 12/17/2016.
 */
