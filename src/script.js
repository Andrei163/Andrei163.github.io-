let starttimer = '2019-09-02';

function getTimeStart(starttime) {
    let t = (Date.parse(new Date())-Date.parse(starttimer)),
    days = Math.floor(t/1000/60/60/24),
    hours = Math.floor((t/1000/60/60)-(days * 24)),
    minutes = Math.floor((t/1000/60) % 60),
    seconds = Math.floor((t/1000) % 60);

    return {
        'total' : t,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function setClock(id, starttime) {
    let timer = document.getElementById(id),
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);
        
    function updateClock() {
        let t = getTimeStart(starttime);

        function addZero(num){
                    if(num <= 9) {
                        return '0' + num;
                    } else return num;
                };
        days.textContent = addZero(t.days);
        hours.textContent = addZero(t.hours);
        minutes.textContent = addZero(t.minutes);
        seconds.textContent = addZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }

}

setClock('timer');


let deadline = '2019-12-31';

function getTimeRemaining(endtime) {
    let n = Date.parse(endtime) - Date.parse(new Date()),
    enddays = Math.floor(n/1000/60/60/24),
    endhours = Math.floor((n/1000/60/60)-(enddays * 24)),
    endminutes = Math.floor((n/1000/60) % 60),
    endseconds = Math.floor((n/1000) % 60);

    return {
        'total' : n,
        'enddays' : enddays,
        'endhours' : endhours,
        'endminutes' : endminutes,
        'endseconds' : endseconds
    };
}

function setClock1(id, endtime) {
    let endtimer = document.getElementById(id),
        enddays = endtimer.querySelector('.enddays'),
        endhours = endtimer.querySelector('.endhours'),
        endminutes = endtimer.querySelector('.endminutes'),
        endseconds = endtimer.querySelector('.endseconds'),
        endtimeInterval = setInterval(updateClock, 1000);
        
    function updateClock() {
        let n = getTimeRemaining(endtime);

        function addZeroo(num){
                    if(num <= 9) {
                        return '0' + num;
                    } else return num;
                };
        enddays.textContent = addZeroo(n.enddays);
        endhours.textContent = addZeroo(n.endhours);
        endminutes.textContent = addZeroo(n.endminutes);
        endseconds.textContent = addZeroo(n.endseconds);

        if (n.total <= 0) {
            clearInterval(endtimeInterval);
            endhours.textContent = '00';
            endminutes.textContent = '00';
            endseconds.textContent = '00';
        }
    }

}

setClock1('endtimer', deadline);



