const $ = require('jquery');

$(document).ready(function () {
    console.log("jquery");
    const {getMovies} = require('./api.js');
    const {addMovies} = require('./api.js');
    const {editMovies} = require('./api.js');
    const loading = $("#movies");
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


    getMovies().then((movies) => {
        console.log('Here are all the movies:');
        movies.forEach(({title, rating, id}) => {
            console.log(`id#${id} - ${title} - rating: ${rating}`);
            let result = "";
            result += "<h5>Movie ID: " + id + "</h5>";
            result += "<h3>Title: " + title + "</h3>";
            result += "<h4>Rating: " + rating + "</h4>";
            console.log(result);
            loading.append(result);
            done.empty();


        });
    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });
});
