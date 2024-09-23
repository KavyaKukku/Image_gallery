// List of image filenames and alternative text descriptions
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
const altTexts = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'Closeup of a rock on a seashore',
  'pic3.jpg': 'Closeup of a pink flower with dew drops',
  'pic4.jpg': 'Landscape with mountains and clouds',
  'pic5.jpg': 'Closeup of a butterfly on a leaf'
};

// Select the required elements from the DOM
const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const overlay = document.querySelector('.overlay');
const btn = document.querySelector('.dark');

// Loop through the images and create the thumbnail images
for (const img of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${img}`);
  newImage.setAttribute('alt', altTexts[img]);
  thumbBar.appendChild(newImage);

  // Add a click event listener to update the main image and alt text
  newImage.addEventListener('click', () => {
    displayedImg.setAttribute('src', `images/${img}`);
    displayedImg.setAttribute('alt', altTexts[img]);
  });
}

// Variable to track if the image is darkened
let isDark = false;

// Add a click event listener to the button to toggle darkening
btn.addEventListener('click', () => {
  if (!isDark) {
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    btn.textContent = 'Lighten';
    isDark = true;
  } else {
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    btn.textContent = 'Darken';
    isDark = false;
  }
});
