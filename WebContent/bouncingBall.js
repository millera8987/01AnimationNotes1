
var game = new Phaser.Game(800, 480, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

var g;
var speed = 5;
var c = {dx:speed,dy:speed,size:50};
var text;
var row = {};


function preload() {
	
	
    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
   
	
    
}

function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen
    //  and assign it to a variable
    //var image = game.add.sprite(0, 0, 'einstein');
	
	g = game.add.graphics(0,0);
	
    g.beginFill(0xFFFF00);
    g.drawCircle(c.size/2,c.size/2,c.size);
    g.endFill();
   
    //var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    //  The Text is positioned at 0, 100
    //text = game.add.text(0, 200, "c.x = " + c.x, style);
   
   for(var i=0;i<10;i++){
   		console.log("Hello World" + i);
	}
    
   //document.getElementById("output").innerHTML = "Paragraph changed!";
    //game.physics.enable(image, Phaser.Physics.ARCADE);

    //image.body.velocity.x=150;

}

function update(){
	 
	//text.text = "c.x = " + c.x;
	g.x+=c.dx;
	g.y+=c.dy;
	if ((c.dx < 0 && g.x + c.dx  < 0) || (c.dx > 0 && g.x + c.dx +c.size > game.width)){
		c.dx = -c.dx;
	}
	if ((c.dy < 0 && g.y + c.dy  < 0) || (c.dy > 0 && g.y + c.dy + c.size > game.height)){
		c.dy = -c.dy;
	}
	


}

function render(){
	print("hello world");
	
}

function print(what){
	game.debug.text(what,0,12 * row);
	row++;
}
