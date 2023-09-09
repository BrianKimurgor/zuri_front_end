document.addEventListener("DOMContentLoaded", function () {
    // Get references to HTML elements by their data-testid attributes
    const slackNameElement = document.querySelector("[data-testid='slackUserName']");
    const currentDayElement = document.querySelector("[data-testid='currentDayOfTheWeek']");
    const currentUTCTimeElement = document.querySelector("[data-testid='currentUTCTime']");
    const myTrackElement = document.querySelector("[data-testid='myTrack']");
    const githubURLElement = document.querySelector("[data-testid='githubURL']");

    // Get the current date and time
    const currentDate = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

    // Update HTML elements with dynamic data
    slackNameElement.textContent = "Brian Kimurgor";
    currentDayElement.textContent = currentDayOfWeek;
    currentUTCTimeElement.textContent = currentDate.getTime(); // UTC time in milliseconds
    myTrackElement.textContent = "Frontend"; // Replace with your track
    githubURLElement.href = "https://github.com/your-username/your-repository"; // Replace with your GitHub URL
});
