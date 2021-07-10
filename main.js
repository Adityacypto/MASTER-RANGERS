canvas = document.getElementById("myCanvas");
ctx  = canvas.getContext("2d");

var rover_width = 100;
var rover_height = 90;
var background_image=" mars.jpg";
var rover_image= "rover.png";
var rover_x= 10;
var rover_y= 10;
var nasa_array_images= ["nasa1","nasa2","nasa4"];
var random_number = Math.floor(Math.random()* 3);
console.log(random_number);

background_image= nasa_array_images[random_number];
console.log("background_image = "+ background_image );

function add()
{
     background_image_tag= new Image();
     background_image_tag.onload= uploadbackground();
     background_image_tag.src= background_image;

     rover_image_tag= new Image();
     rover_image_tag.onload= uploadrover();
     rover_image_tag.src= rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width, canvas.height);

}
function uploadrover(){
    ctx.drawImage(rover_image_tag,rover_x,rover_y,rover_width, rover_height);

}


window.addEventListener("keydown" , mykeydown);

function mykeydown(e){
     keypressed= e.keyCode;
     console.log(keypressed);


    
     if (keypressed == '38') {
        up();
        console.log("up");
    }
    if (keypressed == '40') {
        down();
        console.log("down");
    }
    if (keypressed == '39') {
        right();
        console.log("right");
    }
    if (keypressed == '37') {
        left();
        console.log("left");
    }


    }



    function up(){

        if(rover_y>=10)
        {
           rover_y= rover_y-10;
           console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();

        }
        
    }


    function down(){

        if(rover_y<=500)
        {
           rover_y= rover_y+10;
           console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();

        }
        
    }


    function right(){

        if(rover_x<=700)
        {
           rover_x= rover_x+10;
           console.log("When right arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();

        }
        
    }


    function left(){

        if(rover_x>=0)
        {
           rover_x= rover_x-10;
           console.log("When left arrow is pressed, x = " + rover_x + " | y = " +rover_y);
           uploadbackground();
           uploadrover();

        }
        
    }