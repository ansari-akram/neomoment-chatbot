function myTest(text, voiceOf) {
    responsiveVoice.speak(text, voiceOf, {rate: 0.9});
    console.log('Getting voice output!')
}

function getLocalStream() {
    navigator.mediaDevices.getUserMedia({video: false, audio: true}).then( stream => {
        window.localAudio.autoplay = false;
    }).catch( err => {
        if(err === PERMISSION_DENIED) {
            // Explain why you need permission and how to update the permission setting
            console.log("u got an error:" + err)
            }
    });
}


getLocalStream();
