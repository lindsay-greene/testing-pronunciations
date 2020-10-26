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