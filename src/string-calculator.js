class Calculator {
    constructor(numbers) {
        this.defaultValue = 0;
        this.isInputNumber = function(val){
            return (typeof(+val) == "number" && !Number.isNaN(+val))
        };
        this.stringToNum = function(val){
            return +val;
        }
        this.cleanFromOtherDElimeters = function(numsArr){
            var arr = [];
            numsArr.forEach((item, index) => {
                if(!this.isInputNumber(item)){
                    var subArr = item.split('\n');
                    subArr.forEach((itm, inx)=>{
                        arr.push(itm);
                    });
                    numsArr.splice(index,1);
                }
            });
            arr.forEach(item => {
                numsArr.push(item);
            });
            return numsArr;
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
            if(numbers.match(/,\\n/) != null) {
                return this.defaultValue;
            }
            var numsArr = numbers.split(',');
            var refineArr = this.cleanFromOtherDElimeters(numsArr);
            return refineArr.reduce((a,b)=>{
                return (this.stringToNum(a)+this.stringToNum(b));
            });
        }
    }
}
module.exports = Calculator;
/**
 * Created by HP on 12/17/2016.
 */
