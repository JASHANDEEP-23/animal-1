//https://teachablemachine.withgoogle.com/models/mMmQTMSgl/

function start(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier( "https://teachablemachine.withgoogle.com/models/mMmQTMSgl/model.json",modelLoaded)    
}


function modelLoaded(){
    console.log("model is loded");
    classifier.classify(gotResults)
}

 function gotResults (error,results){
    if (error) {
        console.error(error)
    } else {
        console.log(results)
    }
 }

