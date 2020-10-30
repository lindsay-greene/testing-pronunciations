var ipa = document.getElementById("ipa");
var gcide = document.getElementById("gcide");
var arpabet = document.getElementById("arpabet");
var ahd = document.getElementById("ahd"); 
var synth = window.speechSynthesis;

ipa.onclick = function() {
    var utterance = new SpeechSynthesisUtterance("/ˈæpl̩/");
    synth.speak(utterance);
}

gcide.onclick = function() {
    var utterance = new SpeechSynthesisUtterance("(ăp\"p'l)");
    synth.speak(utterance);
}

arpabet.onclick = function() {
    var utterance = new SpeechSynthesisUtterance("AE1 P AH0 L");
    synth.speak(utterance);
}

ahd.onclick = function() {
    var utterance = new SpeechSynthesisUtterance("ăp′əl");
    synth.speak(utterance);
}


var baseUrl = "https://api.wordnik.com/v4/word.json/"
var apiKey = "i6ywqo6rwijjztu6tr3y6ackzvib0hdrit0mvjcx5brehzt97";
var word = "apple";
var apiUrl = baseUrl + word + "/pronunciations?useCanonical=false&typeFormat=ahd&limit=50&api_key=" + apiKey;
console.log(apiUrl);

let response = fetch(apiUrl);
fetch(apiUrl) 
    .then(response => {
        response.text
        // for set in response 
            // if set contains raw type : IPA then store it and break loop 
            // else break it down using our own regex OR just say no pronunciation available 
        // ipa = storedtext.raw
        // synth.speak(ipa)
    });
    console.log(response);
    