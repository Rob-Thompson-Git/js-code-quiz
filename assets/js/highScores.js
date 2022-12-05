// declare variables needed
var scores = document.querySelector("#scores");
var clearScores = document.querySelector("#clear-scores");
var backButton = document.querySelector("#back-button");

// add event listener to clear scores button that listens for a click and then runs a function to clear local storage
clearScores.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

// retrieve all scores from local storage
var allScores = localStorage.getItem("allScores");
// use JSON.parse to de-stringify all scores objects in local storage
allScores = JSON.parse(allScores);

// if all scores is not null, run for loop to iterate through all scores
if (allScores !== null) {
    for (var i = 0; i < allScores.length; i++) {
        
        // create li for each individual score object (initials, score)
        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " - " + allScores[i].score;
        // append to page
        scores.appendChild(createLi);
    }
}

// add event listener that listens for click and navigates back to the quiz, where user can retake quiz
backButton.addEventListener("click", function() {
    window.location.replace("./index.html");
});