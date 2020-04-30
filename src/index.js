const $ = require('jquery');

$(document).ready(function () {
    console.log("jquery");
    const {getMovies} = require('./api.js');
    const {addMovies} = require('./api.js');
    const {editMovies} = require('./api.js');
    const {deleteMovie} = require('./api.js');
    const loading = $(".carousel-inner");
    const done = $(".empty");

    const submitMovie = $("#submit");
    const addMovieName = $("#add-movie");
    const addMovieRating = $("#rating");

    submitMovie.click(function () {
        addMovies(addMovieName.val(), addMovieRating.val());
    });

    const editMovie = $('#edit');
    const editID = $('#id');
    const editMovieName = $('#edit-movie');
    const editRating = $('#edit-rating');

    editMovie.click(function () {
        editMovies(editMovieName.val(), editRating.val(), editID.val());
    });


    const deleteButton =$('#delete');
    const deleteId =$('#delete-id');

    deleteButton.click(function () {
        deleteMovie(deleteId.val())
    });


    getMovies().then((movies) => {
        console.log('Here are all the movies:');
        movies.forEach(({title, rating, id}) => {
            console.log(`id#${id} - ${title} - rating: ${rating}`);

            let result = "" +
            "<div class=\"carousel-item\"><img src=\"https://cdn4.iconfinder.com/data/icons/small-n-flat/24/movie-alt2-512.png\" class=\"d-block w-100\" alt=\"...\">"+
                "<div class='carousel-caption d-none d-md-block'>" +
                "<h5>Title: " + title + "</h5>" +
                "<p> Rating: " + rating + "</p>" +
                "<p>Movie id: " + id + "</p>"+
                "</div>" +
                "</div>";
            console.log(result);
            loading.append(result);
            done.empty();

        });
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
});
