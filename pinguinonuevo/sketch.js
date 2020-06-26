var img;
var x = 0;
var y = 250;
var body = 225;
var eye = 120;
var easing = 0.1;

function setup(){
    img = loadImage("moni.jpeg");
    createCanvas (959,960);
}

function draw(){
    var targetX = mouseX;
    x+=(targetX - x) * easing;
    
    if(mouseIsPressed){
        body = 300;
        eye = 60;
    }else {
        body = 225;
        eye = 120;
    }
    
    
    background(img);
    
    noStroke();
    fill(255,160,45);
    ellipse(x-100,y+body,100,50);
    ellipse(x+100,y+body,100,50);
    fill(0);
    ellipse(x-150,y+90,60,235);
    ellipse(x+150,y+90,60,235);
    rect(x-150,y,300,body);
    stroke(0);
    strokeWeight(300);
    line(x,y-85,x,y+30);
    
    fill(255);
    noStroke();
    ellipse(x-70,y-80,eye,eye);
    ellipse(x+70,y-80,eye,eye);
    ellipse(x,y+95,200,200);
    
    fill(0);
    ellipse(x-70,y-80,eye/5,eye/5);
    ellipse(x+70,y-80,eye/5,eye/5);
    
    noStroke();
    fill(255,160,45);
    triangle(x-15,y-15,x+15,y-50,x,y-25);
    

    
}