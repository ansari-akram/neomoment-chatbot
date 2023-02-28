function myTest(text, voiceOf) {
    responsiveVoice.speak(text, voiceOf, {rate: 0.9});
    console.log('Getting voice output!')
}


function getLocalStream() {
    var checkM;
    navigator.mediaDevices.getUserMedia({video: false, audio: true})
    .catch( err => {
        console.log("u got an errorr:" + err)
        if (err) {
            console.log("u got an errorr2222 :" + err)
            checkM = false;
        } else {
            checkM = true
        }
    });
    console.log("u got an errorr333333 :" + checkM)
    return checkM;
}

// getLocalStream();

function getMicStatus () {
    navigator.permissions.query({name: 'microphone'})
    .then(function(permissionObj) {
        permissionObj.onchange = function(){
            console.log("Permission changed to 1111111 " + this.state);
            check = this.state

            if (check === 'denied' || check === 'prompt') {
                alert("Please give Mic permisson to continue...");
                checkM = false
                return false;
            } else {
                console.log("Permission changed to 22222 " + this.state);
                checkM = true
                return true;
            }
        }
        console.log('Permission Status final :: ' + permissionObj.state);
        return permissionObj;
    })

}





// function getLocalStream() {

//     navigator.mediaDevices.getUserMedia({video: false, audio: true})
//     .catch( err => {
//         console.log("u got an errorr:" + err)
//         navigator.permissions.query({name: 'microphone'})
//         .then((permissionObj) => {
//             console.log('Permission Status :: ' + permissionObj.state);
//             while(permissionObj.state === 'denied') {
//                 permissionObj.onchange = function(){
//                     console.log("Permission changed to " + this.state);
//                 }

//                 console.log('Permission Status in while :: ' + permissionObj.state);
//                 // Explain why you need permission and how to update the permission setting
//                 console.log("u got an errorr in while:" + err)
//                 alert("Please give Mic permisson to continue...");
//             }
//         })
//     });
 

// }


// granted, denied, prompt
