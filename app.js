// Define Variables
const timer = document.getElementById("timer");

// Set the date we're counting down to
var countDownDate = new Date("June 21, 2029 11:59:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date & time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for day, hours, minutes & seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 21)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with the id: timer
  timer.innerHTML = `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    timer.innerHTML = "Sorry But You Missed The Sale!";
  }
});
