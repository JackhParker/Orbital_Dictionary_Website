function navFn (){
    
    var bodyInput = document.getElementById("body").value
    
    var solarSystem = "https://api.le-systeme-solaire.net/rest/bodies/{id}
    "
   
    fetch(solarSystem)
    .then(function(response){
        return responsesjson()


    })