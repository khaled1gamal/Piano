const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheckbox = document.querySelector('.keys-checkbox input');

let allKeys = [], 
audio = new Audio('tunes/a.wav'); //by default, audio src is "a" tune

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed
  audio.play(); // plaing audio

  const clickedKey = document.querySelector(`[data-key='${key}']`);
  clickedKey.classList.add('active');
  setTimeout(() => {
    clickedKey.classList.remove('active');
  }, 150);
}

pianoKeys.forEach(key => {
  allKeys.push(key.dataset.key)
  // call playTune function with passing data key value as argument
  key.addEventListener('click', () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
}

const showHideKeys = () => {
  pianoKeys.forEach(key => key.classList.toggle('hide'))
}

const pressedkey = (e) => {
  // if the pressed key is in the allKeys array, only call the playTune function
  if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener('click', showHideKeys);
volumeSlider.addEventListener('input', handleVolume);
document.addEventListener('keydown', pressedkey);