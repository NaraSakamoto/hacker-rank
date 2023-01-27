/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positiveValues = 0, negativeValues = 0, zeroValues= 0;

    arr.forEach(
    (value) => {
        if(value == 0){
            zeroValues++;
        }   
        if(value < 0){
            negativeValues++;
        }
        if(value > 0){
            positiveValues++;
        }
    }  
    );

    return [positiveValues/arr.length,negativeValues/arr.length, zeroValues/arr.length];
}


module.exports = plusMinus;