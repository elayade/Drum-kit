function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  key.classList.add("playing");
  setTimeout(() => {
    key.classList.remove("playing");
  }, 100);
  audio.currentTime = 0;
  audio.play();
}

window.addEventListener("keydown", playSound);
