const $ = require('jquery');

$(document).ready(function () {
    console.log("jquery");
    const {getMovies} = require('./api.js');
    const {addMovies} = require('./api.js');
    const {editMovies} = require('./api.js');
    const {deleteMovie} = require('./api.js');
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


    const deleteButton =$('#delete');
    const deleteId =$('#delete-id');

    deleteButton.click(function () {
        deleteMovie(deleteId.val())
    });


    getMovies().then((movies) => {
        console.log('Here are all the movies:');
        movies.forEach(({title, rating, id}) => {
            console.log(`id#${id} - ${title} - rating: ${rating}`);
            // let result = "";
            // result += "<div class='container content'>";
            // result += "<div class=\"card mb-3\">";
            // result += "<img src=\"https://media.netflix.com/dist/img/meta-image-netflix-symbol-black.png\" class=\"card-img-top\" alt=\"Netflix\">";
            // result += "<div class='card-body'>";
            // result += "<h3 class='card-title'>Title: " + title + "</h3>";
            // result += "<p class='card-text'>Rating: " + rating + "</p>";
            // result += "<p class='card-text'>Movie ID: " + id + "</p>";
            // result += "</div>";
            // result += "</div>";
            // result += "</div>";
            // result += "<button id='delete' type='submit'>Delete</button>";

            let result = "";
            result +=

                "<div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-ride=\"carousel\">"+
                // "<ol class=\"carousel-indicators\">"+
                // "  <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"0\" class=\"active\"></li>"+
                // "   <li data-target=\"#carouselExampleCaptions\" data-slide-to=\"1\"></li>"+
                // "<li data-target=\"#carouselExampleCaptions\" data-slide-to=\"2\"></li></ol>"+
                "<div class=\"carousel-inner\">"+
                "<div class='carousel-item active '>" +
                "<img src=\"https://media.netflix.com/dist/img/meta-image-netflix-symbol-black.png\" class=\"card-img-top\" alt=\"Netflix\">" +
                "<div class=\"carousel-caption d-none d-md-block\">" +
                "<h3>Title: " + "hello" + "</h3>" +
                "<p>Rating: " + "</p>" +
                "<p>Movie ID: " + "</p>"+
                "</div>" +
                "</div>"+
                "<div class=\"carousel-item active\">"+
                "<img src=\"https://media.netflix.com/dist/img/meta-image-netflix-symbol-black.png\" class=\"card-img-top\" alt=\"Netflix\">" +
                "<div class=\"carousel-caption d-none d-md-block\">"+
                "<h3>Title: " + "Netflix" + "</h3>" +
                "<p>Rating: " + "</p>" +
                "<p>Movie ID: " +  "</p>"+
                "</div>" +
                "</div>"+
                "<div class=\"carousel-item\">"+
                "<img src=\"https://media.netflix.com/dist/img/meta-image-netflix-symbol-black.png\" class=\"card-img-top\" alt=\"Netflix\">" +
                "<div class=\"carousel-caption d-none d-md-block\">"+
                "<h3>Title: " + "</h3>" +
                "<p>Rating: " + "</p>" +
                "<p>Movie ID: " + "</p>"+
                "</div>" +
                "</div>"+
                "</div>"+
                "<a class=\"carousel-control-prev\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"prev\">" +
                "<span class='carousel-control-prev-icon' aria-hidden='true'></span>" +
                "<span class=\"sr-only\">Previous</span>"+
                "</a>"+
                " <a class=\"carousel-control-next\" href=\"#carouselExampleCaptions\" role=\"button\" data-slide=\"next\">"+
                "<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>"+
                "<span class=\"sr-only\">Next</span>"+
                "</a>"+
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
