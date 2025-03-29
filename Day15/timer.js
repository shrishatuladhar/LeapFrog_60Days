const colon = document.querySelectorAll(".colon");
colon.forEach((element) => {
  element.style.color = "#fff";
});


let digitalClock = () => {
const colon = document.querySelectorAll(".colon");
colon.forEach((element) => {
  element.style.color = "#fff";
});
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let amorpm = hours >= 12 ? 'pm' : 'am';
    
    // Convert to 12-hour format
    if (hours > 12) {
        hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }
    
    // Add leading zeros to single-digit numbers
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("amorpm").innerHTML = amorpm;
};

setInterval(digitalClock, 1000);

