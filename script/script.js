let sec = 0;
let min = 0;
let hr = 0;

let interval = null;

function start() {
  watch();
  if (interval === null) {
    interval = setInterval(watch, 1000);
  }
}
function pause() {
  clearInterval(interval);
  interval = null;
}
function stop() {
  clearInterval(interval);
  interval = null;
  sec = 0;
  min = 0;
  hr = 0;
  document.getElementById("watch").innerText = "00:00:00";
}

function watch() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
    if (min == 60) {
      min = 0;
      hr++;
    }
  }
  let formattedHr = hr.toString().padStart(2, "0");
  let formattedMin = min.toString().padStart(2, "0");
  let formattedSec = sec.toString().padStart(2, "0");
  console.log(min);
  console.log(sec);
  document.getElementById("watch").innerText =
    formattedHr + ":" + formattedMin + ":" + formattedSec;
}
