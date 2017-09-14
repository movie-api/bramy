const $ = require("jquery");

function saveAddForm () {
    $('#save-add').click(function () {
        let title = $("#movie-title").val();
        let rating = $("#rating").val();
        let movie = {
            title: title,
            rating: rating
        };
        console.log(movie);
        fetch("/api/movies", {
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({title, rating})
        });
        // addMovie();
    });
}

// function addMovie () {

// }

module.exports = {saveAddForm};


