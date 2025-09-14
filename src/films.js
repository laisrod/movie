function ensureArray(value) {
  return Array.isArray(value) ? value : [];
}

function hasValidScore(movie) {
  return movie && typeof movie.score === 'number';
}

function hasDirector(movie, director) {
  return movie && movie.director === director;
}

function hasCategory(movie, category) {
  return movie && Array.isArray(movie.genre) && movie.genre.includes(category);
}

function calculateAverage(items, scoreExtractor) {
  const validItems = items.filter(item => hasValidScore(item));
  if (validItems.length === 0) return 0;
  
  const sum = validItems.reduce((acc, item) => acc + scoreExtractor(item), 0);
  return Number((sum / validItems.length).toFixed(2));
}

function extractProperty(movies, property, fallback = '') {
  return ensureArray(movies)
    .map(movie => (movie && movie[property]) || fallback)
    .filter(Boolean);
}

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const directors = extractProperty(array, 'director');
  return Array.from(new Set(directors));
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return ensureArray(array).filter(movie => hasDirector(movie, director));
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const movies = ensureArray(array);
  const moviesByDirector = movies
    .filter(movie => hasDirector(movie, director))
    .filter(hasValidScore);
  
  return calculateAverage(moviesByDirector, movie => movie.score);
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const titles = extractProperty(movies, 'title');
  return titles
    .sort((a, b) => a.localeCompare(b))
    .slice(0, 20);
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
  const movieList = ensureArray(movies);
  const moviesInCategory = movieList
    .filter(movie => hasCategory(movie, category))
    .filter(hasValidScore);
  
  return calculateAverage(moviesInCategory, movie => movie.score);
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
