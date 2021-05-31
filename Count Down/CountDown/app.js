alert("Countdown tll December 25");   
function countdown()
{
    const targetTime = new Date("2021, 12 , 25 , 00:00:00").getTime();
    const currentTime = new Date().getTime();
    const remainingTime = targetTime - currentTime;


    console.log(targetTime);

    // As getTime() gives time in ms we need to convert it 
    // into corrosponding time zone 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 24;
    const day = hour * 24;

    const days = Math.floor(remainingTime / day);
    const hours = Math.floor( (remainingTime % day) / hour );
    const minutes = Math.floor( (remainingTime % hour) / minute );
    const seconds = Math.floor( (remainingTime % minute) / second );

    document.getElementById("day").textContent = days;
    document.getElementById("hour").textContent = hours;
    document.getElementById("minute").textContent = minutes;
    document.getElementById("second").textContent = seconds;

}

setInterval(countdown, 1000);
