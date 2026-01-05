const hourHand = document.getElementById("hr");
const minuteHand = document.getElementById("min");
const secondHand = document.getElementById("sec");

const digitalTime = document.getElementById("digitalTime");
const dateEl = document.getElementById("date");

function updateClock() {
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Analog rotation calculations
  const secDeg = seconds * 6; // 360 / 60
  const minDeg = minutes * 6 + seconds * 0.1;
  const hrDeg = (hours % 12) * 30 + minutes * 0.5;

  secondHand.style.transform = `rotate(${secDeg}deg)`;
  minuteHand.style.transform = `rotate(${minDeg}deg)`;
  hourHand.style.transform = `rotate(${hrDeg}deg)`;

  // Digital time
  const hh = hours.toString().padStart(2, "0");
  const mm = minutes.toString().padStart(2, "0");
  const ss = seconds.toString().padStart(2, "0");

  digitalTime.textContent = `${hh}:${mm}:${ss}`;
  dateEl.textContent = now.toDateString();
}

// Run immediately + every second
updateClock();
setInterval(updateClock, 1000);
