document.addEventListener('DOMContentLoaded', function() {
	// code here will execute after the document is loaded
    

    //     
    // console.log(renderMovies(movieData))

});
// this function is outside of the document ready block.
// it will take a database and map out each result
// next it will then create an h2 element inside of a div with the movie title
// then it will append the result as a string 
// that will allow the ability to create and add this block of html
function renderMovies(movieArray) {
    // use the map function to map a database and save it to a variable
    const movieHtmlArray = movieArray.map((currentMovie) => {
        // create and return movie title inside of an h2 and div element
        return `<div><h2>${currentMovie.Title}</h2></div><br>`
        
    })
    // add the previous template literal to the variable above as a string
    return movieHtmlArray.join('');
}

const myForm = document.getElementById('search-form');
myForm.addEventListener('submit', function(e){
    // event listener code goes here
    e.preventDefault();
    const results = document.getElementById('movies-container').innerHTML = renderMovies(movieData);
    

})
























// <div class="card" style="width: 18rem;">
//             <img src="..." class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>