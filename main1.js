function setup(){
    var canvas =  createCanvas(700 , 600);
    canvas.parent('canvas');
      webcam = createCapture(VIDEO);
      webcam.size(400 , 350);
      webcam.hide();
      poseNet = ml5.poseNet(webcam , modelLoaded);
      poseNet.on('pose' , gotPoses);
  }
  
  function draw(){
    image(webcam , 0 , 0 , 400 , 350);
    fill('#91e6cf');
    stroke('#91e6cf');

    if (score_right > 0.02){
      circle(rightX , rightY , 20);
    }
  }

  function modelLoaded(){
    console.log("PoseNet Model Initialized!!");
  }

  function gotPoses(result){
    if (result.length > 0){
      console.log(result);
      rightX = result[0].pose.rightWrist.x;
      rightY = result[0].pose.rightWrist.y;
      score_right = result[0].pose.rightWrist.confidence;
      console.log("RightWrist X= " + rightX + " Y= " + rightY , "Score- " + score_right);
    }
  }

  rightX = 0;
rightY = 0;
score_right = 0;