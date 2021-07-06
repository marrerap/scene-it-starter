document.addEventListener('DOMContentLoaded', function() {
	// code here will execute after the document is loaded
    let watchlistJSON = localStorage.getItem('watchlist');
    let watchlist = JSON.parse(watchlistJSON)
    console.log(watchlist)
    renderMovies(watchlist)
    document.getElementById('movies-container').innerHTML = renderMovies(watchlist);
    document.addEventListener('click', (e) => {        
        if (e.target.classList.contains("clear")) {
            e.preventDefault();
            let movieID = e.target.dataset.imdbId
            removeFromWatchList(movieID)
            console.log(movieID)
        }    
            
        
    })

});
function renderMovies(movieArray) {   
    const movieHtmlArray = movieArray.map(currentMovie => {      
        return `<div class='movie col-6' style='padding-top: 15px;'>
              <img src="${currentMovie.Poster}" alt="">
              <h5 class='title'>${currentMovie.Title}</h5>
              <p>${currentMovie.Year}</p>
              <a href="#" class="clear btn btn-primary" data-imdb-id="${currentMovie.imdbID}">Clear</a>
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
    console.log(movie)
    delete movie
    watchlistJSON = JSON.stringify(watchlist);
    localStorage.setItem('watchlist', watchlistJSON);
}
