
//var entry = document.getElementById("entry");
//var form = document.getElementById("form");
var submit = document.getElementById("submit");
console.log(entry);

var apiURL = "";
submit.onclick = function() {
    console.log(form);
    let word = document.getElementById("entry").value;
    var baseUrl = "https://api.wordnik.com/v4/word.json/"
    var apiKey = "i6ywqo6rwijjztu6tr3y6ackzvib0hdrit0mvjcx5brehzt97";
    apiUrl = baseUrl + word + "/pronunciations?useCanonical=false&typeFormat=ahd&limit=50&api_key=" + apiKey;
    console.log(apiUrl);

    let request = new XMLHttpRequest();
    request.open("GET", apiURL);
    request.responseType = "json";
    request.send();
    console.log(request);

    var pronunciations;
    request.onload = function() {
        pronunciations = request.responseXML;
        console.log("test");
        console.log(pronunciations);
    }
}
    