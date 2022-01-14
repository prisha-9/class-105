Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera")
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
    });
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HLZMoyYLV/model.json',modelloaded);
function modelloaded(){
    console.log('modelloaded');
}
function check(){
    img=document.getElementById('selfie_image');
classifier.classify(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_object_name").innerHTML=results[0].label;
        document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(2)*100+"%";
    }
}