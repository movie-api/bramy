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

getMovies().then((movies) => {
  console.log('Here are all the movies:');
    createList(movies);
    saveAddForm();
    deleteMovie($("#confirmDelete"));

}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});


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
        }).then(()=>{
            getMovies().then((movies) => {
                createList(movies)
            });
        });
        $("#add-movie-form").modal("toggle");
    });
}

function deleteMovie (deleteConfirm) {
    $('#movieTable').delegate(".glyphicon-minus","click", (e) =>{
        let deleteBtn = $("#confirmDelete");
        let movieId = $(e.target).attr('data-id');
        console.log(movieId);
        deleteBtn.attr('data-id', movieId);
    });
    deleteConfirm.click(function () {
        $("#confirmDelete").removeAttr("data-id");
        console.log($(this));
        let id = $(this).attr("data-id");
        console.log(id);
        fetch(`/api/movies/${id}`, {
            headers: {"content-type": "application/json"},
            method: "DELETE"
        }).then(()=>{
            getMovies().then((movies) => {
                createList(movies)
            });
        });
        $("#delete-movie").modal("toggle");

    });
}