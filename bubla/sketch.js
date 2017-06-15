var mic;
 var micLevel;

function setup(){
  createCanvas(600,600);
  
  mic = new p5.AudioIn();
  mic.start();

}


function draw(){
  background(0);
   fill(255);
  micLevel = mic.getLevel();

   
  
  
  var size = map(micLevel, 0, 1, 0, 600);
  ellipse(width/2, height/2, size, size);
 
//   ellipse(width/2, constrain(height-micLevel*height*5, 0, height), size, size);

}


	
