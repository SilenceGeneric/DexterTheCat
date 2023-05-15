// This is the memes.js file.
// It contains the code for the memes gallery.

// Get the Reddit API key.
const API_KEY = "YOUR_API_KEY";

// Create a new Reddit client.
const client = new RedditClient(API_KEY);

// Get the list of cat subreddits.
const catSubreddits = ["r/cats", "r/kittens", "r/catmemes"];

// Get the latest cat memes from each subreddit.
const catMemes = catSubreddits.map((subreddit) => {
  return client.getTopPosts(subreddit, "hot", 10);
});

// Create a list of cat meme images.
const catMemeImages = catMemes.flatMap((memes) => {
  return memes.map((meme) => {
    return meme.url;
  });
});

// Create a list of cat meme captions.
const catMemeCaptions = catMemes.flatMap((memes) => {
  return memes.map((meme) => {
    return meme.title;
  });
});

// Create a container for the cat meme images.
const catMemeImagesContainer = document.getElementById("cat-meme-images");

// Add the cat meme images to the container.
catMemeImagesContainer.innerHTML = catMemeImages.join("");

// Create a container for the cat meme captions.
const catMemeCaptionsContainer = document.getElementById("cat-meme-captions");

// Add the cat meme captions to the container.
catMemeCaptionsContainer.innerHTML = catMemeCaptions.join("");
