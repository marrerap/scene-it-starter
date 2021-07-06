document.addEventListener('DOMContentLoaded', function() {
	// code here will execute after the document is loaded
});




// this next function will take a database and for each entry, create a div element
// with a h2 element using key.title as its text. Then it will append this new
// element to the movieHtmlArray variable as a string. we can then use the result
// of this function to create title's for our search results.


// this is the beginning of the function with an anonymous parameter
// later we will add the databases we want mapped into the place of anonymous
// parameter
function renderMovies(movieArray) {
    // use the map function to map a database and run a function that will 
    // create an element used to display the title of of the Movie
    const movieHtmlArray = movieArray.map((currentMovie) => {
        // create a title inside of a div using the h2 and the title of the 
        // movie from the results of the map function
        return `<div><h2>${currentMovie.Title}</h2></div><br>`
        
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
myForm.addEventListener('submit', function(e){
    // prevent the default action of refreshing the page
    e.preventDefault();
    // create a link to the element I want to add the results to and display the
    // results
    document.getElementById('movies-container').innerHTML = renderMovies(movieData);
    

})
























// <div class="card" style="width: 18rem;">
//             <img src="..." class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>