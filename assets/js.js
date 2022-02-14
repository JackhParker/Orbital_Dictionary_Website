// Defining variables that are being utilized alongside our fetch call and background image
let clientID = "OMagC9GezDzZQKGjkT6QHaqQX74W3xukdyNYzqgP";
let endpoint = `https://api.nasa.gov/planetary/apod?api_key=${clientID}`;
const imageContainer = document.querySelector(".imageContainer");

// Defining variables that are being utilized alongside our search bar
const searchBtn = document.querySelector("#submitBtn")
const searchInput = document.getElementById("searchInput")
const searchHistoryUl = document.getElementById(`searchHistory`);

// new global var being adding fo the facts button
const randomFactsButton = document.getElementById(`randomFactsButton`);

let factList = [`earth`, `mars`, `jupiter`, `saturn`, `moon`, `io`, `titan`, `neptune`, `venus`, `mercury`, `pluto`, `ceres`, `europa`, `ganymede`];


// Original Code for the image of the day 

fetch(endpoint)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        imageContainer.style = `background-image:url("${data.url}");`;
        // textDOMArea.textContent = data[0].explanation;
    })

//start of the function for the background image info 

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
    var searchArray = []
    if (localStorage.getItem("Search Array")) { searchArray = JSON.parse(localStorage.getItem("Search Array")) }
    searchArray.push(searchInput.value)

    localStorage.setItem("Search Array", JSON.stringify(searchArray))
    document.location.href = './infopage.html';


    // we will need to have within local storage an array of recent searches
    // Arrays must be stringified in local storage
    // Array strings must be parsed so we can use the push method on them
    // If there is no previous history of an array in local storage we should create a new array
})


// new code thats for the random fact function and the event listener for it
function randomFacts() {
    var factCard = document.querySelector("#factCard")
    var namePulled = factList[Math.floor(Math.random() * factList.length)];
    var factInfo = `https://api.le-systeme-solaire.net/rest/bodies/${namePulled}`


    fetch(factInfo)
        .then(function (response) {
            return response.json();

        })
        .then(function (data) {
            factCard.innerHTML = ``;
            var name = document.createElement(`h1`);
            var facts = document.createElement(`h3`);
            var facts2 = document.createElement(`p`);
            var facts3 = document.createElement(`p`);
            var facts4 = document.createElement(`p`);

            name.textContent = data.englishName;
            facts.textContent = data.bodyType;
            facts2.textContent = `Mass in Kg: ` + data.mass.massValue + ` x 10^` + data.mass.massExponent + ` Kg`;
            facts3.textContent = `Gravity: ` + data.gravity + ` Meters/Sec`;
            facts4.textContent = `Average Temp: ` + Math.round(data.avgTemp + -273.15) + `C`;

            factCard.appendChild(name);
            factCard.appendChild(facts);
            factCard.appendChild(facts2);
            factCard.appendChild(facts3);
            factCard.appendChild(facts4);
            console.log(data);
        })
}
// for (var i=0; i < factsArray.length; i++) {
//   
//}
function backgroundInfo() {
    var clientID2 = "OMagC9GezDzZQKGjkT6QHaqQX74W3xukdyNYzqgP";
    var endpoint2 = `https://api.nasa.gov/planetary/apod?api_key=${clientID2}`;
    fetch(endpoint2)
        .then(function (response) {
            response.json();
        })

        .then(function (data) {
            console.log(data);
            var imageInfo = document.createElement(`p`);
            imageInfo.textContent = data;
            imageCardInfo.appendChild(imageInfo);
        })
}


// Click function for fact button
randomFactsButton.addEventListener(`click`, function (event) {
    event.preventDefault();
    randomFacts();
})

// Click function for back ground button
backgroundInfoButton.addEventListener(`click`, function (event) {
    event.preventDefault();
    backgroundInfo();
})
// function pulls local storage when someone clicks on bar
// create element
// populate element from storage
// append populated element to ul (li to ul)
// make for loop to populate child 
// append child
// clear ul of any content
function getRecentSearches() {
    var searchArray2 = JSON.parse(localStorage.getItem("Search Array"))
    for (let i = 0; i < searchArray2.length; i++) {
        var element = document.createElement(`li`)
        var text = searchArray2[i]
        console.log(text)
        element.textContent = text
        searchHistoryUl.appendChild(element)
    }
}
getRecentSearches();
