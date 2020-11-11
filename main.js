
var entry = document.getElementById("entry");
console.log(entry);

var apiURL = "";

submit.addEventListener("keyup", function(event){
    if(event.keyCode == 13) {
        event.preventDefault;
    }
});

async function buildURL(event) {
    let word = document.getElementById("entry").value;
    var baseUrl = "https://api.wordnik.com/v4/word.json/"
    var apiKey = "i6ywqo6rwijjztu6tr3y6ackzvib0hdrit0mvjcx5brehzt97";
    apiUrl = baseUrl + word + "/pronunciations?useCanonical=false&typeFormat=ahd&limit=50&api_key=" + apiKey;
    console.log(apiUrl);
}

async function sendRequest(event) {
    await buildURL;
    let request = new XMLHttpRequest();
    request.open("GET", apiURL);
    request.responseType = "json";
    request.send();
    console.log(request);
}

async function readData(event) {
    await sendRequest;
    // take in data 
    // find "rawtype":"IPA"
    // get its parent element
    // search parent element for "raw" value
}

async function speak(pronunciation) {
    await readData;
    speechSynthesis.speak(pronunciation)
}
    