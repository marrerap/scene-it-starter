document.addEventListener('DOMContentLoaded', function() {
	// code here will execute after the document is loaded
    document.addEventListener('click', (e) => {        
        if (e.target.classList.contains("add-button")) {
            e.preventDefault();
            let movieID = e.target.dataset.imdbId
            saveToWatchList(movieID)
        }
        if (e.target.classList.contains("clear")) {
            e.preventDefault();
            let movieID = e.target.dataset.imdbId
            removeFromWatchList(movieID)
        }    
            
        
    }) 
});

function saveToWatchList(movieID) {
    const movie = movieData.find((currentMovie) => {
        return currentMovie.imdbID == movieID
        
    });
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) {
        watchlist = [];
    }
    watchlist.push(movie)
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    
}
function removeFromWatchList(movieID) {
    const movie = movieData.find((currentMovie) => {
        return currentMovie.imdbID == movieID
        
    });
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON);
    if (watchlist == null) {
        watchlist = [];
    }
    watchlist.remove(movie)
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
    
}


// this next function will take a database and for each entry, create a block of code
// with space for a title, poster, year and add button. Then it will append this new
// block to the movieHtmlArray variable as a string. we can then use the result
// of this function to create blocks for our search results.


// this is the beginning of the function with an anonymous parameter
// later we will add the databases we want mapped into the place of anonymous
// parameter
function renderMovies(movieArray) {
    // use the map function to map a database and run a function that will 
    // create an element used to display the title of of the Movie
    const movieHtmlArray = movieArray.map((currentMovie) => {
        // create a title inside of a div using the h2 and the title of the 
        // movie from the results of the map function
        return `<div class='movie col-6' style='padding-top: 15px;'>
              <img src="${currentMovie.Poster}" alt="">
              <h5 class='title'>${currentMovie.Title}</h5>
              <p>${currentMovie.Year}</p>
              <a href="#" class="add-button btn btn-primary" data-imdb-id="${currentMovie.imdbID}">Add</a>              
            </div>`
        
    })
    // add the previous expression to movieHtmlArray variable as a string.  
    // this will allow us to call upon the code created in the previous step
    // and utilize it in the html by adding titles 
    return movieHtmlArray.join('');
}

// this function will listen for a submission in the search bar that is inside
// of a form. It will then display results on screen
// first create a link for the form I want to listen to
const myForm = document.getElementById('search-form');
// create the listener using the link created in the previous step and listen
// for a submit and then start a function
myForm.addEventListener(('submit'), (e) => {
    // prevent the default action of refreshing the page
    e.preventDefault();
    // create a link to the element I want to add the results to and display the
    // results
    document.getElementById('movies-container').innerHTML = renderMovies(movieData);
    

})
























// <div class="card" style="width: 18rem;">
//     <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//         <a href="#" class="btn btn-primary">Go somewhere</a>
//     </div>
// </div>