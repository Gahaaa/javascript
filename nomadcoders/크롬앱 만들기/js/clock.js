const clock = document.querySelector("h2#clock");
const clockF = document.querySelector("h2#clock .first");
const clockS = document.querySelector("h2#clock .second");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    clockF.innerText=`${hours}:${minutes}:`
    clockS.innerText=`${second}`
}

getClock();
setInterval(getClock, 1000);