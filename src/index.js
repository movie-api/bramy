/**
 * es6 modules and imports
 */

import sayHello from './hello';

sayHello('World');

/**
 * require style imports
 */

const getMovies = require('./getMovies.js');
const createList = require('./createList.js');
let id = 0;

getMovies().then((movies) => {
    console.log('Here are all the movies:');
    createList(movies);
    setListener();
    saveAddForm();
    // deleteMovie($("#confirmDelete"));

}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});


function saveAddForm() {
    $('#save-add').click(function () {

        let title = $("#movie-title").val();
        let rating = $("#rating").val();
        let movie = {
            title: title,
            rating: rating
        };
        $('#movie-title').val("");
        console.log(movie);
        fetch("/api/movies", {
            headers: {"content-type": "application/json"},
            method: "POST",
            body: JSON.stringify({title, rating})
        }).then(() => {
            getMovies().then((movies) => {
                createList(movies);
                setListener();
                // deleteMovie($("#confirmDelete"));
            });
        });
        $("#add-movie-form").modal("toggle");
    });
}

$("#confirmDelete").on("click", function () {
    // $("#confirmDelete").off("click");
    console.log(id);
    fetch(`/api/movies/${id}`, {
        headers: {"content-type": "application/json"},
        method: "DELETE"
    }).then(() => {
        getMovies().then((movies) => {
            createList(movies);
            setListener();
            // deleteMovie($("#confirmDelete"));
        });
    });
    $("#delete-movie").modal("toggle");

});

function setListener() {
    $("#movieTable").delegate('.glyphicon-minus', "click", function (e) {
        // $('.glyphicon-minus').off("click");
        id = $(this).attr('data-id');

    });
}
