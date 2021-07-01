document.addEventListener('DOMContentLoaded', function() {
	// code here will execute after the document is loaded
    const results = document.getElementById('movies-container')
    

});
function renderMovies(movieArray) {
    const movieHtmlArray = movieArray.map((currentMovie) => {
        return `<div><h2>${currentMovie.Title}</h2></div>`
        
    })
    return movieHtmlArray.join('');
}

const myForm = document.getElementById('search-form');
myForm.addEventListener('submit', function(e){
    // event listener code goes here
})
























// <div class="card" style="width: 18rem;">
//             <img src="..." class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>