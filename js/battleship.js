var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;

var hits = 0;
var guesses = 0;
var isSunk = false;



var view = {
    displayMessage: function(msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function(location) {
        var cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }
}

view.displayHit("00");
view.displayHit("13");
view.displayHit("36");
view.displayMiss("34");
view.displayMiss("16");

view.displayMessage("Testing...Testing... 1, 2, 3");