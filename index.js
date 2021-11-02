function updateClock()
{
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();

    currentMinute = (currentMinute<10?"0":"")+currentMinute;
    currentSeconds = (currentSeconds<10?"0":"")+currentSeconds;



    let timeOfDay = (currentHour<12)?"AM":"PM";
    currentHour= (currentHour>12)?currentHour-12:currentHour;
    currentHour= (currentHour==0)?12:currentHour;
    let currentTimeStr = currentHour+":"+currentMinute+":"+currentSeconds+" "+timeOfDay;
    document.getElementById('clock').innerHTML = currentTimeStr;
}