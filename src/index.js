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
const $ = require("jquery");

let id = 0;

// Progress bar
$(".progress-bar").css('width', '100%');

getMovies().then((movies) => {
    console.log('Here are all the movies:');
    createList(movies);
}).catch((error) => {
    alert('Oh no! Something went wrong.\nCheck the console for details.');
    console.log(error);
});

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
        });
    });
    $("#add-movie-form").modal("toggle");
});

$("#confirmDelete").on("click", function () {
    console.log(id);
    fetch(`/api/movies/${id}`, {
        headers: {"content-type": "application/json"},
        method: "DELETE"
    }).then(() => {
        getMovies().then((movies) => {
            createList(movies);
        });
    });
    $("#delete-movie").modal("toggle");
});

$("#main").delegate('.glyphicon-minus', "click", function (e) {
    id = $(this).attr('data-id');
});

$("#save-edit").on("click", function () {
    let title = $("#edited-movie-title").val();
    let rating = $("#edited-rating").val();
    let movie = {
        title: title,
        rating: rating
    };
    console.log(id);
    fetch(`/api/movies/${id}`, {
        headers: {"content-type": "application/json"},
        method: "PATCH",
        body: JSON.stringify({title, rating})
    }).then(() => {
        getMovies().then((movies) => {
            createList(movies);
        });
    });
    $("#edit-movie").modal("toggle");
});

$("#main").delegate('.glyphicon-edit', "click", function (e) {
    id = $(this).attr('data-id');
    let title = $(this).parent().parent().find(".title").text();
    let rating = $(this).parent().parent().find(".rating").text();
    $("#edited-movie-title").val(title);
    $("#edited-rating").val(rating);
});

// function testAnim(x) {
//     $('.modal').attr('class' + x + '  animated');
// };
//
// $('.myModal').on('show.bs.modal', function (e) {
//     var anim = $('#entrance').val();
//     testAnim(anim);
// })
// $('.myModal').on('hide.bs.modal', function (e) {
//     var anim = $('#exit').val();
//     testAnim(anim);
// });


