const title = document.querySelector(`title`);
const searchResultsArticle = document.getElementById(`searchResults`);
let recentSearchItem = localStorage.getItem(`recent`);
let searchResults = [];

title.textContent = `Information about ` + recentSearchItem.charAt(0).toUpperCase() + recentSearchItem.slice(1);


getInformation(recentSearchItem)

function getInformation(x) {

    let infoURL = `https://api.le-systeme-solaire.net/rest/bodies?filter[]=englishName,cs,${x}`
    fetch(infoURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            populateResults(data)
            console.log(data);
        });
}

function populateResults(info) {
    let resultsUl = document.createElement(`ul`);
    let result = info.bodies[0];
    resultsUl.innerHTML = `
    <li> 
        <h3>${result.englishName}<h3>
        <h4>${result.bodyType}</h4>
        <p> Density : ${result.density} g/cm3</p>
        <p>Mass : ${result.mass.massValue} kg ^ ${result.mass.massExponent}<p>
        <p>Average Temp : ${result.avgTemp} Kelvin</p>
    </li>
    `;
    searchResultsArticle.appendChild(resultsUl)
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


