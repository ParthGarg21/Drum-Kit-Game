let btns = document.querySelectorAll(".btn");

for (let btn of btns) {
  btn.addEventListener("click", handleClick);
}

document.addEventListener("keydown", handlePress);

function handleClick() {
  let drum = this.innerText;
  playSound(drum);
  handleFade(this);
}

function handlePress(event) {
  let drum = event.key;
  playSound(drum);
  let sel = "btn-" + drum;
  let obj = document.querySelector("#" + sel);
  handleFade(obj);
}

function playSound(drum) {
  if (drum == "w") {
    let ad = new Audio("sounds/tom-1.mp3");
    ad.play();
  } else if (drum == "a") {
    let ad = new Audio("sounds/tom-2.mp3");
    ad.play();
  } else if (drum == "s") {
    let ad = new Audio("sounds/tom-3.mp3");
    ad.play();
  } else if (drum == "d") {
    let ad = new Audio("sounds/tom-4.mp3");
    ad.play();
  } else if (drum == "j") {
    let ad = new Audio("sounds/snare.mp3");
    ad.play();
  } else if (drum == "k") {
    let ad = new Audio("sounds/crash.mp3");
    ad.play();
  } else if (drum == "l") {
    let ad = new Audio("sounds/kick-bass.mp3");
    ad.play();
  }
}

function handleFade(drum) {
  drum.classList.add("fade");
  drum.classList.add("another");

  setTimeout(() => {
    drum.classList.remove("fade");
    drum.classList.remove("another");
  }, 200);
}
