// This is the youtube-gallery.js file.
// It contains the code for the YouTube gallery.

// Get the YouTube API key.
const API_KEY = "YOUR_API_KEY";

// Create a new YouTube player.
const player = new YT.Player("player", {
  height: 390,
  width: 640,
  videoId: "YOUR_VIDEO_ID",
  playerVars: {
    controls: 0,
    showinfo: 0,
  },
});

// Create a list of YouTube videos.
const videos = [
  {
    title: "Title 1",
    thumbnail: "https://i.imgur.com/example1.jpg",
    videoId: "YOUR_VIDEO_ID_1",
  },
  {
    title: "Title 2",
    thumbnail: "https://i.imgur.com/example2.jpg",
    videoId: "YOUR_VIDEO_ID_2",
  },
  {
    title: "Title 3",
    thumbnail: "https://i.imgur.com/example3.jpg",
    videoId: "YOUR_VIDEO_ID_3",
  },
];

// Create a list of thumbnails.
const thumbnails = videos.map((video) => {
  return `<img src="${video.thumbnail}" />`;
});

// Create a list of video titles.
const titles = videos.map((video) => {
  return `<h4>${video.title}</h4>`;
});

// Create a list of video buttons.
const buttons = videos.map((video) => {
  return `<button onclick="playVideo(${video.videoId})">Play</button>`;
});

// Create a container for the thumbnails.
const thumbnailsContainer = document.getElementById("thumbnails");

// Add the thumbnails to the container.
thumbnailsContainer.innerHTML = thumbnails.join("");

// Create a container for the titles.
const titlesContainer = document.getElementById("titles");

// Add the titles to the container.
titlesContainer.innerHTML = titles.join("");

// Create a container for the buttons.
const buttonsContainer = document.getElementById("buttons");

// Add the buttons to the container.
buttonsContainer.innerHTML = buttons.join("");

// Function to play a video.
function playVideo(videoId) {
  player.loadVideoById(videoId);
}

