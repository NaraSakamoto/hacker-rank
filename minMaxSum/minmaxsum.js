function minMaxSum(arr) {
    arr.sort();
    
    let min = 0, max = 0, counter=0;
    
    arr.forEach((value => {
        if(counter < 4){
            min=min+value;
        }
        if(counter >= 1){
            max=max+value;
        }
        counter++;
    }));
    
    return min + " " + max;

}
module.exports = minMaxSum;