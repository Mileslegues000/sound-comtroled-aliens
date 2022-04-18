function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/96Rf_XFli/model.json',modelReady);
}
function modelReady(){
classifier.classify(gotResults);

}

function gotResults(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="I can hear- "+ results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy- "+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";

        img_1=document.getElementById("alien1");
        img_2=document.getElementById("alien2");
        img_3=document.getElementById("alien3");
        img_4=document.getElementById("alien4");

        if (results[0].label=="clap") {
            img_1.src="aliens-01.gif";
            img_2.src="aliens-02.png";
            img_3.src="aliens-03.png";
            img_4.src="aliens-04.png";
        }
        else if (results[0].label=="bell") {
            img_1.src="aliens-01.png";
            img_2.src="aliens-02.gif";
            img_3.src="aliens-03.png";
            img_4.src="aliens-04.png";
        }
        else if (results[0].label=="snap") {
            img_1.src="aliens-01.png";
            img_2.src="aliens-02.png";
            img_3.src="aliens-03.gif";
            img_4.src="aliens-04.png";
        }
        else {
            img_1.src="aliens-01.png";
            img_2.src="aliens-02.png";
            img_3.src="aliens-03.png";
            img_4.src="aliens-04.gif";
        }
    }
}