const dateElement = document.getElementById("date");
const timeElement = document.getElementById("time");


function updateTime() {
    const date = new Date();
    dateElement.innerHTML = "Tänään on: " + date.getMonth() + "." + date.getDate() + "." + date.getFullYear();
    timeElement.innerHTML = "Nykyinen aika on : " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

setInterval(updateTime, 1000);