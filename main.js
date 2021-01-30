var canvas = new fabric.Canvas('myCanvas');
imagewidth = 30;
imageheight = 30;
player_x = 10;
player_y = 10;
var player_object="";
var block_image_object="";
function player_update(){
    fabric.Image.fromURL("ironman.jpg", function(Img){
        player_object= Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_y,
        left:player_x    
        });
        canvas.add(player_object);
     });
 }
 
 function new_image(get_image){
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object= Img;
        block_image_object.scaleToWidth(imagewidth);
        block_image_object.scaleToHeight(imageheight);
        block_image_object.set({
       top:player_y,
       left:player_x    
       });
       canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown); 
function my_keydown(e){
    keyPressed = e.keyCode;
    if(e.shiftkey = true && keyPressed == '80'){
        image_width = image_width + 10;
        image_height = image_height + 10;
        document.getElementById("current_width").innerHTML = image_width;
        document.getElementById("current_height").innerHTML = image_height;
    }


if(e.shiftKey && keyPressed == '77'){
    image_width = image_width - 10;
    image_height = image_height - 10;
    document.getElementById("current_width").innerHTML = image_width;
    document.getElementById("current_height").innerHTML = image_height;
}


if(keyPressed == '66'){
    new_image('thorface.jpg');
}
if(keyPressed == '84'){
    new_image('thor_right_hand.png');
}
if(keyPressed == '73'){
    new_image('ironman.jpg');
}
if(keyPressed == '83'){
    new_image('spidermanface.jpg');
}
if(keyPressed == '67'){
    new_image('captainamericaface.jpeg');
}
if(keyPressed == '88'){
    new_image('captain_america_left_hand.png');
}
if(keyPressed == '76'){
    new_image('ironmanlegs.jpeg');
}
if(keyPressed == '67'){
    new_image('ironmansuit.jpeg');
}
if(keyPressed == '82'){
    new_image('ironman_right_hand.png');
}
if(keyPressed == '72'){
    new_image('hulk_face.png');
}
if(keyPressed == '68'){
    new_image('hulkd_body.png')
}
if(keyPressed == '69'){
    new_image('hulk_legs.png');
}
if(keyPressed == '70'){
    new_image('hulk_right_hand.png');
}
if(keyPressed == '77'){
    new_image('spidermanbody.jpeg');
}
if(keyPressed == '85'){
    new_image('spiderman_right_hand.png');
}
if(keyPressed == '79'){
    new_image('spiderman_legs.png');
}
if(keyPressed == '38'){
   up();
}
if(keyPressed == '40'){
    down();
}
if(keyPressed == '37'){
    left();
}
if(keyPressed == '39'){
    right();
}
}