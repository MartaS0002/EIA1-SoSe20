"use strict";
// für Teil 1
var sounds = [];
sounds.push(new Audio("A.mp3"));
sounds.push(new Audio("C.mp3"));
sounds.push(new Audio("F.mp3"));
sounds.push(new Audio("G.mp3"));
sounds.push(new Audio("hihat.mp3"));
sounds.push(new Audio("kick.mp3"));
sounds.push(new Audio("laugh-1.mp3"));
sounds.push(new Audio("laugh-2.mp3"));
sounds.push(new Audio("snare.mp3"));
function playSample(samplenumber) {
  sounds[samplenumber].play();
}
// für Teil 2
function playbeat() {
  setInterval(function () {
    playSample(5);
  }, 1000);
  setInterval(function () {
    playSample(4);
  }, 500);
  setInterval(function () {
    playSample(8);
  }, 1500);
}

window.addEventListener("load", function () {
  document.querySelector("#button1").addEventListener("click", function () {
    playSample(0);
  });
  document.querySelector("#button2").addEventListener("click", function () {
    playSample(1);
  });
  document.querySelector("#button3").addEventListener("click", function () {
    playSample(2);
  });
  document.querySelector("#button4").addEventListener("click", function () {
    playSample(3);
  });
  document.querySelector("#button5").addEventListener("click", function () {
    playSample(4);
  });
  document.querySelector("#button6").addEventListener("click", function () {
    playSample(5);
  });
  document.querySelector("#button7").addEventListener("click", function () {
    playSample(6);
  });
  document.querySelector("#button8").addEventListener("click", function () {
    playSample(7);
  });
  document.querySelector("#button9").addEventListener("click", function () {
    playSample(8);
  });
  document.querySelector("#playbutton").addEventListener("click", playbeat);
});
//# sourceMappingURL=aufgabe7.js.map
