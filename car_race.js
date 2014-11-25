// JavaScript Document
var mov=1;
var t=-300000;
var counter=0;
var player = document.getElementById('mycar');
player.style.left = 655 + "px";
var gameover = false;
var speed = 1;
document.onkeydown = function (e) {
switch (e.keyCode) {
        case (37):
            {  mov--;
               break;
            }

        case (39):
            {   mov++;
                break;
          }}

if (mov<= 0) {
       mov = 0;
       player.style.left = 550 + "px";
}
else if (mov == 1) {
       player.style.left = 655 + "px";
}
else if (mov >= 2) {
      mov = 2;
      player.style.left = 760 + "px";
}
};


if (!gameover)
{
var e = setInterval(game,speed);
}
function game() {
var a = new loop();
    t += 1;
if (t < 1 && gameover == false) {
    a.moveroad(t);
    a.detectCollision();
    if (counter >= 150) {
     counter = 0;
     a.makeenemy();
}
}
	 counter++;
}
	 
function loop() {
    this.x = 0;
    this.y = 0;
    this.interverId;
    this.element;
    var that = this; 
    this.moveroad = function (t) {
    var path = document.getElementById("pave");
    path.style.top = t + "px";
};	 
	this.makeenemy = function () {
    that.element = document.createElement('div');
    that.element.className = "opponent";
    document.getElementById('pave').appendChild(that.element);
    that.x = getnumber(3,0);
if (that.x < 1){
    that.x = 550;
}
else if (that.x >= 1 && that.x < 2) {
    that.x = 655;
}
else if (that.x >= 2 && that.x < 3) {
    that.x = 760;
}
    that.y = 0;
    that.element.style.top = that.y + "px";
    that.element.style.left = that.x + "px";
if (gameover== false)
    that.intervalId = setInterval(that.moveenemy,speed);
else {
     clearInterval(that.intervalId);
}
};
	this.moveenemy = function () {
    that.y++;
    that.element.style.top = that.y + "px";
    if (that.y > 600 || gameover) {
    clearInterval(that.intervalId);
    document.getElementById('pave').removeChild(that.element);
}
};
    this.detectCollision = function () {
     var opponentlist = document.getElementsByClassName('opponent');
     var me = document.getElementsByClassName('car');
     for (var i = 0; i < opponentlist.length; i++) {
     if (opponentlist[i].style.top.replace('px', '') >= 320 && opponentlist[i].style.top.replace('px', '') <= 350 &&   opponentlist[i].style.left.replace('px', '') == me[0].style.left.replace('px', '') ) 
			{
                gameover = true;
				alert("game over !! Press F5 to start again");
			}}
};
function getnumber(max,min) {
     return Math.random() * (max - min) + min;
 }}