var classifier;
function Classifation(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/hdTkrhF3b/model.json",model_loaded);
}
function model_loaded() {
    console.log("Model loaded");
   classifier.classify(GotResults);
}
function GotResults(error, results){
if (error) {
    console.error(error);
} }