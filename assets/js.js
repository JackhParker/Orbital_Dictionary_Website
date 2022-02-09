
let clientID = "OMagC9GezDzZQKGjkT6QHaqQX74W3xukdyNYzqgP";
let endpoint = `https://api.nasa.gov/planetary/apod?api_key=${clientID}&count=1`;
var searchBtn = document.querySelector("#search")
let searchInput = document.getElementById("searchinput")
let imageElement = document.querySelector("#randomImage");
let imageLink = document.querySelector("imageLink");

fetch(endpoint)
    .then(function (response) {
        return response.json();
})
.then(function (data) {

for (let i = 0; i < data.length; i++) {
    imageElement.src = data[i].url;
  }
})

function navFn (){
    
    var bodyInput = document.getElementById("body").value
    
    var solarSystem = "https://api.le-systeme-solaire.net/rest/bodies/{id}"
   
    fetch(solarSystem)
    .then(function(response){
        return responsesjson()


    })
}


searchBtn.addEventListener("click", function(event){
    event.preventDefault()
    localStorage.setItem("recent", searchInput.value);

})