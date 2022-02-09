
let clientID = "OMagC9GezDzZQKGjkT6QHaqQX74W3xukdyNYzqgP";
let endpoint = `https://api.nasa.gov/planetary/apod?api_key=${clientID}&count=1`;
var searchBtn = document.querySelector("#search")
let searchInput = document.getElementById("searchinput")
let imageElement = document.querySelector("#randomImage");
let imageLink = document.querySelector("imageLink");


// new global var being adding fo the facts button
let randomFactsButton = document.querySelector(`#randomFactsButton`);


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
            return response.json()
    })
}


searchBtn.addEventListener("click", function(event){
    event.preventDefault()
    localStorage.setItem("recent", searchInput.value);
})

// new code thats for the random fact function and the event listener for it
function randomFacts(){
    var factCard = document.getElementById("#fact-card")
    var factInfo = "https://api.le-systeme-solaire.net/rest/bodies/mars"

    fetch(factInfo)
    .then(function(responce){
        return responce.json();
        
    })
    .then(function(data){
        var facts = document.createElement(`p`);
        facts.textContent = data;
        console.log(data);
    })
    
}

randomFactsButton.addEventListener(`click`, function(event){
    event.preventDefault();
    randomFacts();
})