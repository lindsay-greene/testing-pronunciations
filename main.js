
var entry = document.getElementById("entry");
var form = document.getElementById("form");
var submit = document.getElementById("submit");
console.log(entry);

submit.onclick = function() {
    console.log(form);
    let word = entry.innerText;
    var baseUrl = "https://api.wordnik.com/v4/word.json/"
    var apiKey = "i6ywqo6rwijjztu6tr3y6ackzvib0hdrit0mvjcx5brehzt97";
    var apiUrl = baseUrl + word + "/pronunciations?useCanonical=false&typeFormat=ahd&limit=50&api_key=" + apiKey;
    console.log(apiUrl);

    let response = fetch(apiUrl);
    fetch(apiUrl) 
    .then(response => {
        response.text
        // find rawtype:IPA and store parent element
        // ipa = storedtext.raw
        // synth.speak(ipa)
    });
    console.log(response.text);

}



    