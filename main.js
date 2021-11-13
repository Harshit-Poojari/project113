function preload() {  
}

function setup() {
    Canvas = createCanvas(640,480);
    Canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_image = "";
}

function draw() {
    image(video,0,0,640,480);
    tint(image);
}


function take_snapshot() {
    save('harshit.png');
}