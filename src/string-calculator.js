class Calculator {
    constructor(numbers) {
        this.defaultValue = 0;
        this.isInputNumber = function(val){
            return (typeof(+val) == "number" && !Number.isNaN(+val))
        };
        this.stringToNum = function(val){
            return +val;
        }
        this.cleanFromOtherDElimeters = function(nums){
            var arr = [];
            nums.forEach((item, index) => {
                var str = item + '';
                if(str.match(/-/) != null) {
                    arr = -1;
                }
                else {
                    if(!this.isInputNumber(item)){
                        var subArr = item.split('\n');
                        subArr.forEach((itm, inx)=>{
                            arr.push(itm);
                        });
                        nums.splice(index,1);
                    }
                }

            });
            if(arr == -1){
                return -1;
            }
            arr.forEach(item => {
                nums.push(item);
            });
            return nums;
        }
    }

    intAdd(numbers) {
        var numsArr = [];
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
            if(numbers.match(/\/\//) != null ){
                numbers = numbers.replace(/\/\//,'');
            }
            if(numbers.match(/;/)){
                numsArr = numbers.split(';');
            }
            if(numbers.match(/,/) != null) {
                numsArr = numbers.split(',');
            }
            if(numsArr.length > 0){
                var refineArr = this.cleanFromOtherDElimeters(numsArr);
                console.log('refineArr', refineArr);
                if(refineArr == -1){
                    return 'negative numbers are not allowed';
                }
                return refineArr.reduce((a,b)=>{
                    return (this.stringToNum(a)+this.stringToNum(b));
                });
            }
        }
    }
}
module.exports = Calculator;
/**
 * Created by HP on 12/17/2016.
 */
