var length = document.querySelectorAll(".drum").length;
console.log(length);
var keyPressed;

for (let i = 0; i < length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    keyPressed = this.innerHTML;
    playSound(keyPressed);
    animation(keyPressed);
  });
}

document.addEventListener("keypress", function (event) {
  keyPressed = event.key.toLowerCase();
  playSound(keyPressed);
  animation(keyPressed);
});

function playSound(keyPressed) {
  switch (keyPressed) {
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "j":
      var audiooo = new Audio("sounds/tom-2.mp3");
      audiooo.play();
      break;

    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var aduio = new Audio("sounds/tom-4.mp3");
      aduio.play();
      break;
  }
}

function animation(button) {
  var activeButton = document.querySelector("." + button);
  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 20);
}
