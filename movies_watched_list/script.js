// Get the movie form and movie list elements
const movieForm = document.getElementById('movieForm');
const movieList = document.getElementById('movieList');

// Function to handle form submission
function addMovie(event) {
  event.preventDefault();

  // Get the movie title and year from the form
  const movieTitle = document.getElementById('movieTitle').value;
  const movieYear = document.getElementById('movieYear').value;

  // Create a new list item
  const listItem = document.createElement('li');
  listItem.innerHTML = `<span>${movieTitle}</span>(${movieYear})`;
  
  // Append the list item to the movie list
  movieList.appendChild(listItem);

  // Reset the form inputs
  movieForm.reset();
}

// Event listener for form submission
movieForm.addEventListener('submit', addMovie);
