
let clientID = "OMagC9GezDzZQKGjkT6QHaqQX74W3xukdyNYzqgP";
let endpoint = `https://api.nasa.gov/planetary/apod?api_key=${clientID}`;
var searchBtn = document.querySelector("#search")
let searchInput = document.getElementById("searchinput")
let imageElement = document.querySelector("#randomImage");
let imageLink = document.querySelector("imageLink");
const textDOMArea = document.querySelector(`#testing-p`)


// new global var being adding fo the facts button
let randomFactsButton = document.getElementById(`randomFactsButton`);

// Original Code for the image of the day 

// fetch(endpoint)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         for (let i = 0; i < data.length; i++) {
//             imageElement.src = data[i].url;
//         }
//     })

// Refactored code for the image of the day
// We decided that the context of some of the images without being explained did not fit the webpage

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        imageElement.src = data.url;
        // textDOMArea.textContent = data[0].explanation;
    })


function navFn() {
    var bodyInput = document.getElementById("body").value
    var solarSystem = `https://api.le-systeme-solaire.net/rest/bodies/${body}`

    fetch(solarSystem)
        .then(function (response) {
            return response.json()
        })
}

// Yazid search box
searchBtn.addEventListener("click", function (event) {
    event.preventDefault()
    localStorage.setItem("recent", searchInput.value);
    localStorage.setItem("Search Array", searchArray[function addEntry() {}
    ]);

    // we will need to have within local storage an array of recent searches
    // Arrays must be stringified in local storage
    // Array strings must be parsed so we can use the push method on them
    // If there is no previous history of an array in local storage we should create a new array
})

// new code thats for the random fact function and the event listener for it by JACK P
function randomFacts(){
    var factCard = document.getElementById("fact-card")
    var factInfo = `https://api.le-systeme-solaire.net/rest/bodies/jupiter`

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