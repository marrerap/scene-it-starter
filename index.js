document.addEventListener('DOMContentLoaded', function() {
	// code here will execute after the document is loaded
    document.addEventListener('click', (e) => {        
        if (e.target.classList.contains("add-button")) {
            e.preventDefault();
            let movieID = e.target.dataset.imdbId
            saveToWatchList(movieID)
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



// this next function will take a database and for each entry, create a block of code
// with space for a title, poster, year and add button. Then it will append this new
// block to the movieHtmlArray variable as a string. we can then use the result
// of this function to create blocks for our search results.


// this is the beginning of the function with an anonymous parameter
// later we will add the databases we want mapped into the place of anonymous
// parameter
function renderMovies(movieArray) {
    // use the map function to map a database and run a function that will 
    // create a block of code used to display the results in a card format
    const movieHtmlArray = movieArray.map((currentMovie) => {
        // when this function is run it will return the following lines of code 
        // that will be added to the dom where it is needed 
    return `<div class="card" style="width: 18rem; margin: 15px">
        <img src="${currentMovie.Poster}" class="card-img-top" alt="No Poster Available">
        <div class="card-body">
        <h5 class="card-title">${currentMovie.Title}</h5>
        <p class="card-text">${currentMovie.Year}</p>
        <a href="#" class="add-button btn btn-primary" data-imdb-id="${currentMovie.imdbID}">Add to Watch List</a>
        </div>
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
    const searchString = document.getElementById('search-bar').value
    const urlEncodedSearchString = encodeURIComponent(searchString)
    axios.get("http://www.omdbapi.com/?apikey=59354c85&s=" + urlEncodedSearchString).then(res => {
            
            document.getElementById('movies-container').innerHTML = renderMovies(res.data.Search);    
            movieData = res.data.Search
           
           
    })
  
    

})













