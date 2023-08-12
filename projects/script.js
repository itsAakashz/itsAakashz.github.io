const image = document.getElementById('image');
const rotateButton = document.getElementById('rotateButton');
const speedInput = document.getElementById('speedInput');
let rotationAngle = 0;
let rotating = false;
let rotationSpeed = 0;
let animationFrameId;

rotateButton.addEventListener('click', () => {
  if (rotating) {
    stopRotation();
  } else {
    rotationSpeed = parseFloat(speedInput.value) || 5; // Default speed is 5 degrees per frame
    rotating = true;
    rotateButton.textContent = 'Stop';
    rotateImage();
  }
});

function rotateImage() {
  rotationAngle += rotationSpeed;

  // Apply rotation to the image
  image.style.transform = `rotate(${rotationAngle}deg)`;

  // Call the function recursively to keep rotating
  animationFrameId = requestAnimationFrame(rotateImage);
}

function stopRotation() {
  rotating = false;
  rotateButton.textContent = 'Rotate';
  cancelAnimationFrame(animationFrameId);
}