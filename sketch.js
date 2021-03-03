const num = 1000;
let walker = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
	for(let i =0; i < num; i++){
		walker[i] = new Walker();
		walker[i].position = createVector(random(width), height/2);
	}
}

function draw(){
	fill(0,0);
	rect(0, 0, width, height);
	for(let i =0; i < num; i++){
		walker[i].draw();
	}
}


class Walker{
	constructor(){
		this.position = createVector(width/2, height/2);
	}
	draw(){
		for(let i =0; i < 10; i++){
			this.velocity = createVector(random(-1.0, 1.0), random(-1.25, 1.0));
			this.position.add(this.velocity);
			noStroke();
			fill(255,15);
			circle(this.position.x, this.position.y, 1);
		}
	}
}
