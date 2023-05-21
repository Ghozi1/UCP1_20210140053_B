document.addEventListener("DOMContentLoaded", function () {
    // Greeting
    var currentTime = new Date();
    var currentHour = currentTime.getHours();

    var greeting = "";
    if (currentHour < 12) {
    greeting = "Good morning!";
    } else if (currentHour < 18) {
    greeting = "Good afternoon!";
    } else {
    greeting = "Good evening!";
    } 
    document.getElementById("greeting").textContent = greeting;
    // Current date and time
    setInterval(function () {
    var now = new Date();
    var dateTime = now.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
    });
    document.getElementById("currentDateTime").textContent =
        now.toDateString() + " " + dateTime;
    }, 1000);
});
