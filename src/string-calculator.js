class Calculator {
    constructor(numbers) {
        this.input = numbers;
    }
    add(numbers){
        if(!numbers){
            return 0;
        }
        if(parseInt(numbers, 10)){
            return parseInt(numbers, 10);
        }
    }
}
module.exports = Calculator;
/**
 * Created by HP on 12/17/2016.
 */
