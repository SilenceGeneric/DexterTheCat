// index.js
// Import the DOM and querySelector functions
const {
  DOM,
  querySelector,
} = window;

// Create a function to handle button clicks
const handleButtonClick = (event) => {
  // Get the button that was clicked
  const button = event.target;

  // Get the href attribute of the button
  const href = button.getAttribute("href");

  // Navigate to the href URL
  window.location.href = href;
};

// Create a function to play the video on load
const playVideoOnLoad = () => {
  // Get the video element
  const video = querySelector("video");

  // Play the video
  video.play();
};

// Add event listeners to the buttons
querySelector(".actions button").forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

// Add an event listener to the video element
video.addEventListener("load", playVideoOnLoad);

