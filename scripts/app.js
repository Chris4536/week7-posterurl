const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieDate = document.querySelector('.userInputDate');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieDateToDisplay = document.createElement('p'); 
movieDateToDisplay.classList.add('favoriteMovieDate'); 
container.appendChild(movieDateToDisplay); 

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let dateInStorage = localStorage.getItem('date');


if (titleInStorage && imageUrlInStorage && dateInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieDateToDisplay.textContent = dateInStorage; 
    container.style.backgroundImage = `
        linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)),
        url('${imageUrlInStorage}')
    `;
}


btn.addEventListener('click', () => {
    const movieTitleInput = movieTitle.value;
    const posterUrlInput = moviePosterUrl.value;
    const movieDateInput = movieDate.value;

    
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('date', movieDateInput);

   
    movieTitleToDisplay.textContent = movieTitleInput;
    movieDateToDisplay.textContent = movieDateInput;
    container.style.backgroundImage = `
        linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)),
        url('${posterUrlInput}')
    `;

    
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieDate.value = '';
});