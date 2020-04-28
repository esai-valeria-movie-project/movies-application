module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },

  addMovies: (title, rating, id) => {
    const post = {title: title, rating: rating, id: id};
    const url = ("api/movies")
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
  }
};
