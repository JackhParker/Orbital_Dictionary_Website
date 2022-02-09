
let clientID = "OMagC9GezDzZQKGjkT6QHaqQX74W3xukdyNYzqgP";
let endpoint = `https://api.nasa.gov/planetary/apod?api_key=${clientID}&count=1`;

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