document.addEventListener('DOMContentLoaded', function() {
	// code here will execute after the document is loaded
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON)
    
    renderMovies(watchlist)
    document.getElementById('movies-container').innerHTML = renderMovies(watchlist);
    document.addEventListener('click', (e) => {        
        if (e.target.classList.contains("clear")) {
            e.preventDefault();
            let movieID = e.target.dataset.imdbId
            removeFromWatchList(movieID)
            
        }    
            
        
    })

});
function renderMovies(movieArray) {   
    const movieHtmlArray = movieArray.map(currentMovie => {      
        return `<div class="card" style="width: 18rem; margin: 15px">
        <img src="${currentMovie.Poster}" class="card-img-top" alt="No Poster Available">
        <div class="card-body">
        <h5 class="card-title">${currentMovie.Title}</h5>
        <p class="card-text" style="color: black;">${currentMovie.Year}</p>
        <a href="#" class="clear btn btn-primary" data-imdb-id="${currentMovie.imdbID}">Remove</a>
        </div>
        </div>`        
    })  
    return movieHtmlArray.join('');
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
    watchlist.splice(watchlist.indexOf(movie))
   
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}
