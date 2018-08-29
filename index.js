document.addEventListener("DOMContentLoaded", function() {
  console.log("=== DOMContentLoaded ===");

  let movieData;
  let titanicBtn = document.getElementById("Titanic");
  let terminatorBtn = document.getElementById("Terminator_2");
  
  titanicBtn.addEventListener('click', loadMovieData);
  terminatorBtn.addEventListener('click', loadMovieData);
  
  titanicBtn.addEventListener('click', function(e) {
    loadMovieData("Titanic");
  })
  
  terminatorBtn.addEventListener('click', function(e) {
    loadMovieData("Terminator_2");
  })
  
  function loadMovieData(whichMovie) {
    console.log("=== loadMovieData ===");
    console.log("whichMovie:", whichMovie);
    
    if (whichMovie === "Titanic") {
      console.log("==== Titanic ==== ");
      movieData = movies.Titanic;
      console.log("movieData:", movieData);
      
    } else {
      console.log("==== Terminator_2 ====");
      movieData = movies.Terminator_2;
    }
  
  console.log("movieData:", movieData);
  updatePage(movieData);
  }
  
  function updatePage(movieData) {
  console.log("==== updatePage ====");
  document.getElementById("title").innerHTML = movieData.title;
  document.getElementById("director").innerHTML = movieData.director;
  document.getElementById("filmRating").innerHTML = movieData.filmRating;
  document.getElementById("description").innerHTML = movieData.description;
  document.getElementById("audienceScore").innerHTML = movieData.audienceScore;

  let cast = document.getElementById("cast"); 
  let listHtml = "<ul>";
  
  for (let i = 0; i < movieData.cast.length; i++) {
    console.log("cast[i]:", cast[i]);
    listHtml += "<li>" + movieData.cast[i].role + ": " + movieData.cast[i].actor + "</li>";
  }
  
  listHtml += "</ul>";
  cast.innerHTML = listHtml.cast;



  document.getElementById("Reviews").innerHTML = movieData.reviews;





  }
  
  

})
