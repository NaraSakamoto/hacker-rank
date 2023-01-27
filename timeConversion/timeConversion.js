function timeConversion(s) {
    let splittedTime = s.substr(0, 8).split(':');
    
    let hour = +splittedTime[0];
    if(hour == 12){
        hour = 0;
    }
    
    if(s.charAt(8) == 'P'){
        hour = hour + 12;
        return hour+":"+splittedTime[1]+":"+splittedTime[2];
    }
    
    
    return (hour<10 ? "0"+hour : hour)+":"+splittedTime[1]+":"+splittedTime[2];
}
module.exports = timeConversion;