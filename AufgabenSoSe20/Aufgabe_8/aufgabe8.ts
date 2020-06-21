 // EventListenerSamples 
window.addEventListener("load", function (): void {
  document.querySelector("#button1").addEventListener("click", function (): void {playSample("A.mp3"); });
  document.querySelector("#button2").addEventListener("click", function (): void {playSample("C.mp3"); });
  document.querySelector("#button3").addEventListener("click", function (): void {playSample("F.mp3"); });
  document.querySelector("#button4").addEventListener("click", function (): void {playSample("G.mp3"); });
  document.querySelector("#button5").addEventListener("click", function (): void {playSample("hihat.mp3"); });
  document.querySelector("#button6").addEventListener("click", function (): void {playSample("kick.mp3"); });
  document.querySelector("#button7").addEventListener("click", function (): void {playSample("laugh-1.mp3"); });
  document.querySelector("#button8").addEventListener("click", function (): void {playSample("laugh-2.mp3"); });
  document.querySelector("#button9").addEventListener("click", function (): void {playSample("snare.mp3"); });
  // EventListenerPlaystopbutton
  document.querySelector("#play").addEventListener("click", playstopButton);
   // EventListenerMicro
  document.querySelector("#micro").addEventListener("click", microRecording);
   // EventListenerDelete
  document.getElementById("delete").addEventListener("click", function (): void 
  // DeleteBeat
  {playbutton = [];
  });


  // PLAYBUTTON
  // Playbutton-Sample-String 
  var playbutton = ["kick.mp3", "snare.mp3", "hihat.mp3"];

  // Playbutton-ON/OFF-Image
  function playstopButton() {
    var psbutton = document.querySelector("#play");
    if (psbutton.getAttribute("class") == "fas fa-play") {
      psbutton.setAttribute("class", "fas fa-pause");
      plyBtn();
    } else {
      psbutton.setAttribute("class", "fas fa-play");
      stopButton();
    }
  }
  // Playbutton-Loop
  var interval = false;
  var index = 0;
  function plyBtn() {
    interval = setInterval(function (): void {
      playSample(playbutton[index]);
      index++;
      if (index >= playbutton.length) {
        index = 0;
      }
    }, 350);
  }


  // MICRO
  // Micro-ON/OFF-Farbe
  var micro = false;
  function microRecording() {
     if (micro) {
       micro = false;
       document.getElementById("micro").style.color = "#fff";
     } else {
       micro = true;
       document.getElementById("micro").style.color = "#FF0000";
     }
   }
  // Playbutton + Micro
  function playSample(recordedBeats) {
    if (micro) {
      playbutton.push(recordedBeats);
    }
    const ton = new Audio(recordedBeats);
    ton.play();
  }
  function stopButton() {
    clearInterval(interval);
  }

});