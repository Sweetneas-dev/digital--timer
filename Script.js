const hourE1 = document.getElementById('hour');
const minuteE1 = document.getElementById('minutes');
const secondE1 = document.getElementById('seconds');
const ampmE1 = document.getElementById('ampm');

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }
    
h=h<10 ? "0" + h : h;

    hourE1.innerText = h;
minuteE1.innerText = m;
secondE1.innerText = s;
ampmE1.innerText = ampm;

}

updateClock(); // This will only run once
//requestAnimationFrame(updateClock)
setInterval(updateClock, 1000); // This will run every second
//requestAnimationFrame(updateClock); // This will run every frame