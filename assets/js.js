
let clientID = "OMagC9GezDzZQKGjkT6QHaqQX74W3xukdyNYzqgP";
let endpoint = `https://api.nasa.gov/planetary/apod?api_key=${clientID}`;
var searchBtn = document.querySelector("#search")
let searchInput = document.getElementById("searchinput")
let imageElement = document.querySelector("#randomImage");
let imageLink = document.querySelector("imageLink");


// new global var being adding fo the facts button
let randomFactsButton = document.getElementById(`randomFactsButton`);

var factsArray = [`mars`, `earth`, `moon`, `jupiter`, `titan`, `io`, `neptune`, `venus`, `saturn`];

// original fetch code for image
// fetch(endpoint)
//     .then(function (response) {
//         return response.json();
// })
// // .then(function (data) {
// //     for (let i = 0; i < data.length; i++) {
// //         imageElement.src = data[i].url;
// // }
// // })

fetch(endpoint)
    .then(function (response) {
        return response.json();
})
.then(function (data) {
    // for (let i = 0; i < data.length; i++) {
        imageElement.src = data.url;
// }
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

// new code thats for the random fact function and the event listener for it by JACK P
function randomFacts(){
    var factCard = document.getElementById("fact-card")
    var factInfo = `https://api.le-systeme-solaire.net/rest/bodies/moon`

    fetch(factInfo)
    .then(function(responce){
        return responce.json();
        
    })
    .then(function(data){
        var name = document.createElement(`h1`);
        var facts2 = document.createElement(`h2`);
        var facts = document.createElement(`p`);
        var facts3 = document.createElement(`p`);

        name.textContent = data.englishName;
        facts2.textContent = data.bodyType;
        facts.textContent = `Mass in Kg: ` + data.mass.massValue + ` x 10^` + data.mass.massExponent + ` Kg`;
        facts3.textContent = `Gravity: ` + data.gravity + ` Meters/Sec`;

        factCard.appendChild(name);
        factCard.appendChild(facts2);
        factCard.appendChild(facts);
        factCard.appendChild(facts3);
        console.log(data);
    })
    // for (var i=0; i < factsArray.length; i++) {
//   
//}
}
// FUNCTION FOR THE
randomFactsButton.addEventListener(`click`, function(event){
    event.preventDefault();
    randomFacts();
})