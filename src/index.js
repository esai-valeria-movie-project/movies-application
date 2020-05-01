const $ = require('jquery');

$(document).ready(function () {
    const {getMovies} = require('./api.js');
    const {addMovies} = require('./api.js');
    const {editMovies} = require('./api.js');
    const {deleteMovie} = require('./api.js');
    const loading = $(".carousel-inner");
    const done = $(".empty");

    const submitMovie = $("#submit");
    const addMovieName = $("#add-movie");
    const addMovieRating = $("#rating");
    const addMovieGenre = $('#add-genre');

    submitMovie.click(function () {
        addMovies(addMovieName.val(), addMovieRating.val(), addMovieGenre.val());
    });

    const editMovie = $('#edit');
    const editID = $('#id');
    const editMovieName = $('#edit-movie');
    const editGenre = $('#edit-genre');
    const editRating = $('#edit-rating');

    editMovie.click(function () {
        editMovies(editMovieName.val(), editRating.val(), editGenre.val(), editID.val());
    });


    const deleteButton = $('#delete');
    const deleteId = $('#delete-id');

    deleteButton.click(function () {
        deleteMovie(deleteId.val());
    });




    getMovies().then((movies) => {
        movies.forEach(({title, rating, id, genre}) => {
            const deleteBtn2 = $(`#delete-btn-${id}`);
            deleteBtn2.click(function() {
                deleteMovie($(this).data('id').val());
            });
            let result = "" +
                "<div class=\"carousel-item\"><img src=\"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/movie-alt2-512.png\" class=\"d-block w-100\" alt=\"...\">" +
                "<div class='carousel-caption d-none d-md-block'>" +
                "<h5>Title: " + title + "</h5>" +
                "<h4>Genre: " + genre + "</h4>" +
                "<p> Rating: " + rating + "</p>" +
                "<p>Movie id: " + id + "</p>" +
                `<button id='delete-btn-${id}' data-id='${id}' type='submit'>Delete</button>` +
                "</div>" +
                "</div>";
            loading.append(result);
            done.empty();

        });
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
});
