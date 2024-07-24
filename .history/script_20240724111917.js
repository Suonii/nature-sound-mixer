//wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Create a new AudioContext for audio processing
    const audioContext = new (window.AudioContext || window.webkitAudioContext) ();

    //object to store the sounds with their URLs, audio elements, and gain nodes
    const sounds = {
        rain: {url: 'sounds/rain.mp3', element: null}
    }
})