// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const directors = (array || [])
    .map(movie => movie && movie.director)
    .filter(Boolean);

  return Array.from(new Set(directors));
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const movies = Array.isArray(array) ? array : [];
  return movies.filter(movie => movie && movie.director === director);
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesByDirector = (array || [])
    .filter(movie => movie && movie.director === director)
    .filter(movie => typeof movie.score === 'number');

  if (moviesByDirector.length === 0) return 0;

  const average = moviesByDirector.reduce((acc, movie) => acc + movie.score, 0) / moviesByDirector.length;
  return Number(average.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const titles = (movies || [])
    .map(movie => (movie && movie.title) || '')
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
  return titles;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let sorted = [...movies].sort((a, b) => 
    a.year - b.year || (a.title || '').localeCompare(b.title || '')
  );
  console.log("EXERCICE 5 ->", sorted);
  return sorted;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  const moviesInCategoryWithScore = (movies || [])
    .filter(movie => Array.isArray(movie.genre) && movie.genre.includes(category))
    .filter(movie => typeof movie.score === 'number');

  if (moviesInCategoryWithScore.length === 0) return 0;

  const averageScore = moviesInCategoryWithScore.reduce((accumulator, movie) => accumulator + movie.score, 0) / moviesInCategoryWithScore.length;

  return Number(averageScore.toFixed(2));
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
