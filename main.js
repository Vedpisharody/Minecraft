var canvas = new fabric.Canvas('myCanvas');

block_Image_Width = 30;
block_Image_Height = 30;
playerX = 10;
playerY = 10;

var player_object = "";
var block_Image_Object = "";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_Image_Object = Img;

        block_Image_Object.scaleToWidth(block_Image_Width);
        block_Image_Object.scaleToHeight(block_Image_Height);
        block_Image_Object.set({
            top:playerY,
            left:playerX
        });
        canvas.add(block_Image_Object);
    });
}

window.addEventListener("keydown", keye);
function keye(e)
{
    keypressed = e.keyCode;
    console.log(keypressed);

    if(e.shiftKey == true && keypressed == '80')
    {
        block_Image_Width = block_Image_Width + 10;
        block_Image_Height = block_Image_Height + 10;

        document.getElementById("current_width").innerHTML = block_Image_Width;
        document.getElementById("current_height").innerHTML = block_Image_Height;

        console.log("p and shiftKey pressed together")
    }

    if(e.shiftKey == true && keypressed == '77')
    {
        block_Image_Width = block_Image_Width - 10;
        block_Image_Height = block_Image_Height - 10;

        document.getElementById("current_width").innerHTML=block_Image_Width;
        document.getElementById("current_height").innerHTML=block_Image_Height;

        console.log("m and shiftKey pressed together")
    }

    if(keypressed=='38')
    {
        up();
        console.log("up");
    }

    if(keypressed=='40')
    {
        down();
        console.log("down");
    }

    if(keypressed=='37')
    {
        left();
        console.log("left");
    }

    if(keypressed=='39')
    {
        right();
        console.log("right");
    }

    if(keypressed == '87')
    {
        new_image('wall.jpg');
        console.log("w");
    }

    if(keypressed == '71')
    {
        new_image('ground.png');
        console.log("g");
    }

    if(keypressed == '76')
    {
        new_image('light_green.png');
        console.log("l");
    }

    if(keypressed == '84')
    {
        new_image('trunk.jpg');
        console.log("t");
    }

    if(keypressed == '82')
    {
        new_image('roof.jpg');
        console.log("r");
    }

    if(keypressed == '84')
    {
        new_image('trunk.jpg');
        console.log("t");
    }

    if(keypressed == '89')
    {
        new_image('yellow_wall.png');
        console.log("y");
    }

    if(keypressed == '68')
    {
        new_image('dark_green.png');
        console.log("d");
    }

    if(keypressed == '85')
    {
        new_image('unique.png');
        console.log("u");
    }

    if(keypressed == '67')
    {
        new_image('cloud.jpg');
        console.log("c");
    }
}

function up()
{
    if(playerY >= 0)
    {
        playerY = playerY - block_Image_Height;
        console.log("block image height =" + block_Image_Height);
        console.log("when up arrow key is pressed, X =" + playerX + " Y =" + playerY);
        
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(playerY <= 450)
    {
        playerY = playerY + block_Image_Height;
        console.log("block image height =" + block_Image_Height);
        console.log("when down arrow key is pressed, X =" + playerX + " Y =" + playerY);
        
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(playerX >= 0)
    {
        playerX = playerX - block_Image_Width;
        console.log("block image width =" + block_Image_Width);
        console.log("when left arrow key is pressed, X =" + playerX + " Y =" + playerY);
        
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(playerX <= 800)
    {
        playerX = playerX + block_Image_Width;
        console.log("block image width =" + block_Image_Width);
        console.log("when right arrow key is pressed, X =" + playerX + " Y =" + playerY);
        
        canvas.remove(player_object);
        player_update();
    }
}