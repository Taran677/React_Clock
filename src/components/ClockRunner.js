export function ClockRun() {
  let angleHours;
  let angleMinutes;
  let angleSeconds;
  setInterval(() => {
    let seconds = new Date().getSeconds();
    let minutes = new Date().getMinutes();
    let hours = new Date().getHours();
    if (seconds == 0 || minutes == 0 || hours == 0) {
      root.style.setProperty("--variableTime", "0.0001s");
    } else {
      root.style.setProperty("--variableTime", "0.2s");
    }
    angleSeconds = (seconds / 60) * 360;
    angleHours = (hours / 12 + minutes / (60 * 12)) * 360;
    angleMinutes = (minutes / 60 + seconds / 3600) * 360;
    root.style.setProperty("--angleMinutes", angleMinutes + "deg");
    root.style.setProperty("--angleSeconds", angleSeconds + "deg");
    root.style.setProperty("--angleHours", angleHours + "deg");
  }, 1000);
}
