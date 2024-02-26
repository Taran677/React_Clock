export function ClockRun2() {
  setInterval(() => {
    let seconds = new Date().getSeconds();
    let minutes = new Date().getMinutes();
    let hours = new Date().getHours();
    let hourBox = document.getElementsByClassName("one")[0];
    let minuteBox = document.getElementsByClassName("two")[0];
    let secondBox = document.getElementsByClassName("three")[0];

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    hourBox.innerHTML = hours;
    minuteBox.innerHTML = minutes;
    secondBox.innerHTML = seconds;
  }, 1000);
}
