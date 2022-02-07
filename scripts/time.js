function strTime() {
    return getMinutes() + ":" + getSeconds();
}

function startTime() {
    StartTime = new Date();
    setTimeout(partialTime, 1000);
}

function partialTime() {
    if(GameOver == false) {
        Time = Math.trunc((new Date() - StartTime) / 1000);
    
        updateTime();
        setTimeout(partialTime, 1000);
    }
}

function stopTime() {
    Time = Math.trunc((new Date() - StartTime) / 1000);
}

function getMinutes() {    
    let min = Math.trunc(Time / 60);

    if (min < 10) {
        min = "0" + min;     
    }
    return min;
}

function getSeconds() {
    let seg = Time % 60;

    if (seg < 10) {
        seg = "0" + seg;
    }

    return seg;
}

function strEndGameMsg(){
    let seg = getSeconds();
    let min = getMinutes();
    let msg = ""

    if(min != 0 ){
        msg += min + " minuto";
        if (min > 1) {
            msg += "s";
        }
    }
    if(seg != 0 ) {
        if (min != 0 ){
            msg += " e ";
        }
        msg += seg + " segundo";
        if (seg > 1) {
            msg += "s";
        }
    }
    return msg    
}