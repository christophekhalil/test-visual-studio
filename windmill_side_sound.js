// Place this file in the same directory as your HTML file or update the path in preload()
// This is a simple windmill sound. Replace with your own if desired.
let windmillSideSound;

function preload() {
    // ...existing code...
    soundFormats('mp3', 'ogg');
    windmillSideSound = loadSound('assets/windmill_side.mp3');
}
