module.exports = {
    getMovies: () => {
        return fetch('/api/movies')
            .then(response => response.json());
    },

    addMovies: (title, rating, id) => {
        const post = {title: title, rating: rating, id: id};
        const url = ("api/movies");
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        };
        fetch(url, options)
            .then(response => response.json())
            .catch()
    },

    editMovies: (title, rating, genre, id) => {
        const edit = {title: title, rating: rating, genre: genre};
        const url = (`api/movies/` + id);
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(edit),
        };
        fetch(url, options)
            .then(response => response.json())
            .catch()
    },

    deleteMovie: (id) => {
        const url = (`api/movies/` + id);
        const options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .catch()
    }
};
