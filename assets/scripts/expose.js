// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    // TODO
    var horn_selected = document.getElementById("horn-select");
    var image = document.querySelector("img");
    var audio_control = document.querySelector("audio");
    var volume_control = document.getElementById("volume-controls");
    var volume_icon = volume_control.querySelector("img");
    var play_button = document.querySelector("button");
    const jsConfetti = new JSConfetti();

    horn_selected.addEventListener("change", (event) => {
        let horn_condition = event.target.value;

        if (horn_condition == "air-horn") {
            image.src = "assets/images/air-horn.svg";
            audio_control.src = "assets/audio/air-horn.mp3";
        }
        
        if (horn_condition == "car-horn") {
            image.src = "assets/images/car-horn.svg";
            audio_control.src = "assets/audio/car-horn.mp3";
        }
        
        if (horn_condition == "party-horn") {
            image.src = "assets/images/party-horn.svg";
            audio_control.src = "assets/audio/party-horn.mp3";
        }
    });

    volume_control.addEventListener("change", (event) => {
        let volume_condition = event.target.value;

        if (volume_condition == 0) {
            volume_icon.src = "assets/icons/volume-level-0.svg";
            audio_control.volume = 0;
        }
        else if (volume_condition >= 1 && volume_condition < 33) {
            volume_icon.src = "assets/icons/volume-level-1.svg";
            audio_control.volume = 0.33;
        }
        else if (volume_condition >= 33 && volume_condition < 67) {
            volume_icon.src = "assets/icons/volume-level-2.svg";
            audio_control.volume = 0.67;
        }
        else if (condition >= 67) {
            volume_icon.src = "assets/icons/volume-level-3.svg";
            audio_control.volume = 1.0;
        }
    });

    play_button.addEventListener("click", (event) => {
        if (audio_control.volume != 0) {
            if (horn_selected.value == "party-horn") {
                jsConfetti.addConfetti();
            }
            audio_control.play();
        }
    })
}
