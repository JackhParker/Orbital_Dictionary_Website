
let clientID = "OMagC9GezDzZQKGjkT6QHaqQX74W3xukdyNYzqgP";
let endpoint = `https://api.nasa.gov/planetary/apod?api_key=${clientID}`;
var searchBtn = document.querySelector("#search")
let searchInput = document.getElementById("searchInput")
let imageContainer = document.querySelector(".imageContainer");

// const textDOMArea = document.querySelector(`#testing-p`);


// new global var being adding fo the facts button
let randomFactsButton = document.querySelector(`#randomFactsButton`);

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
        imageContainer.style = `background-image:url("${data.url}");`;
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
    localStorage.setItem("Search Array", searchArray[function addEntry() {
    ]);

    // we will need to have within local storage an array of recent searches
    // Arrays must be stringified in local storage
    // Array strings must be parsed so we can use the push method on them
    // If there is no previous history of an array in local storage we should create a new array
})

// new code thats for the random fact function and the event listener for it
function randomFacts() {
    var factCard = document.querySelector("#factCard")
    var factInfo = "https://api.le-systeme-solaire.net/rest/bodies/mars"

    fetch(factInfo)
        .then(function (responce) {
            return responce.json();

        })
        .then(function (data) {
            var facts = document.createElement(`p`);
            facts.textContent = data;
            console.log(data);
        })

}

randomFactsButton.addEventListener(`click`, function (event) {
    event.preventDefault();
    randomFacts();
})