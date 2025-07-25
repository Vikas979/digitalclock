function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12 || 12; // convert 0 to 12 for 12-hour format

  const formattedTime = [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0')
  ].join(':') + ' ' + ampm;

  document.getElementById('clock').textContent = formattedTime;
}

// Initial call and then every 1 second
updateClock();
setInterval(updateClock, 1000);
