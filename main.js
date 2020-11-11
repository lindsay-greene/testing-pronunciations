
var entry = document.getElementById("entry");

entry.addEventListener("keyup", function(event){
    if(event.keyCode == 13) {
        sendRequest();
    }
});

function buildURL(event) {
    let word = document.getElementById("entry").value;
    var baseUrl = "https://api.wordnik.com/v4/word.json/"
    var apiKey = "i6ywqo6rwijjztu6tr3y6ackzvib0hdrit0mvjcx5brehzt97";
    apiUrl = baseUrl + word + "/pronunciations?useCanonical=false&typeFormat=ahd&limit=50&api_key=" + apiKey;
    return apiUrl;
}

async function sendRequest(event) {
    let apiUrl = buildURL();
    fetch(apiUrl, { 
        method: 'GET'
    })
    .then(function(response) { return response.json(); })
    .then(function(json) {
    readData(json);
    });
}

function readData(json) {
    console.log(json);
    for (let index = 0; index < json.length; index++) {
        const entry = json[index];
        console.log(entry);
        let entryType = entry.rawType;
        if(entryType === "IPA") {
            speak(entry.raw);
            
        }  
    }
}

function speak(IPA) {
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(IPA);
    utterance.pitch = 1;
    utterance.rate = 1.2;
    synth.speak(utterance);
}
    