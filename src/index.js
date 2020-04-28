const $ = require('jquery');

$(document).ready(function () {
    console.log("jquery");
    const {getMovies} = require('./api.js');
    const loading = $("#movies");
    const done = $(".empty");

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
