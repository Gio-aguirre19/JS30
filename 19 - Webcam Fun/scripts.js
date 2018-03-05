const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const redFilterButton = document.querySelector('.redFilter');
const rgbSplitButton = document.querySelector('.rgbSplit');
const greenScreenButton = document.querySelector('.greenScreen');

function getVideo(){
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => {
      console.log("Webcam Denied Access!", err);
    })
}

function paintCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height)
    let pixels = ctx.getImageData(0, 0, width, height)
    /* Filters */
    // pixels = colorChange(pixels);

    pixels = rgbSplit(pixels);
    ctx.globalAlpha = 0.1;

    // pixels = greenScreen(pixels);
    /* Filters end */
    ctx.putImageData(pixels, 0, 0);
  }, 10);
}

function takePhoto() {
  // Play Shutter
  snap.currentTime = 0;
  snap.play();

  // Takes data out of canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'hansome');
  link.innerHTML = `<img src="${data}" />`;
  strip.insertBefore(link, strip.firstChild);
}

function colorChange(pixels){
  for(let i = 0; i < pixels.data.length; i += 4){
    pixels.data[i + 0] += 100; // Red
    pixels.data[i + 1] -= 50; // Green
    pixels.data[i + 2] *= 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels){
  for(let i = 0; i < pixels.data.length; i += 4){
    pixels.data[i - 250] = pixels.data[i + 0]; // Red
    pixels.data[i + 500] = pixels.data[i + 1]; // Green
    pixels.data[i - 500] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels){
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for(i = 0; i < pixels.data.length; i += 4){
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if(red >= levels.rmin
      && blue >= levels.bmin
      && green >= levels.gmin
      && red <= levels.rmax
      && blue <= levels.bmax
      && green <= levels.gmax){
        pixels.data[i + 3] = 0;
      }
  }
  return pixels;
}
function test(e){
  console.log(e);
}

function keyPress(e){
  e.preventDefault();
  if (e.keyCode == 32){
    takePhoto();
  }
}

getVideo();

video.addEventListener('canplay', paintCanvas);
redFilterButton.addEventListener('click', false);
rgbSplitButton.addEventListener('click', false);
greenScreenButton.addEventListener('click', false);
document.addEventListener('keypress', keyPress);
