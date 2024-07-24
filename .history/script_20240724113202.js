//wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Create a new AudioContext for audio processing
    const audioContext = new (window.AudioContext || window.webkitAudioContext) ();

    //object to store the sounds with their URLs, audio elements, and gain nodes
    const sounds = {
        rain: { url: 'sounds/rain.mp3', element: null, gainNode: null},
        forest: { url: 'sounds/forest.mp3', element: null, gainNode: null},
        ocean: { url: 'sounds/ocean.mp3', element: null, gainNode: null}
    };

    //Loop through each sound in the sounds object to set up the audio elements and gain nodes
    Object.keys(sounds).forEach(key => {
        const sound = sounds[key];

        //create a new audio element for the sound
        sound.element = new Audio(sound.url);
        //set the audio element to loop so the sound plays continuously
        sound.element.loop = true;

        //create a gain node for controlling the volume
        sound.gainNode = audioContext.createGain();
        //set the initial volume of the gain node to 0 (muted)
        sound.gainNode.gain.value = 0;

        //create media element source node from the audio element
        const track = audioContext.createMediaElementSource(sound.element);
        //connect the media element source to the gain node, and then to the audio context destination (speakers)
        track.connect(sound.gainNode).connect(audio)
    })
})