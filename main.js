let recognition;

window.onload = (event) => {
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRecognition();
  //recognition.continuous = true;
  //document.getElementById('mic').addEventListener('click', onClickMic);
  recognition.start();
  setTimeout(function () {
    recognition.stop();
  }, 15000);
 
  recognition.onresult = onSpeech;
  
}

  function onSpeech(event) {
  const lastElIndex = event.results.length - 1;
  const text = event.results[lastElIndex][0].transcript;
  document.getElementById('text').value = text;
  Speech();
}

function Speech() {
  if(document.getElementById('text').value === "my name is Boban enter my portfolio") {
    window.location.href = "http://bobanjankovicmyportfolio.herokuapp.com/";
  }
}
