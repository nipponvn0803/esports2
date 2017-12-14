var buttonteam1 = document.getElementById("button-team-1");
var buttonteam2 = document.getElementById("button-team-2");
var buttontop1 =  document.getElementById("button-top-1");
var buttontop2 =  document.getElementById("button-top-2");
var buttontop3 =  document.getElementById("button-top-3");
var buttontop4 =  document.getElementById("button-top-4");
var buttontop5 =  document.getElementById("button-top-5");
var buttontop6 =  document.getElementById("button-top-6");

function buttonTop1(){
  buttontop1.style.backgroundColor = "#E84C3D";
  buttontop2.style.backgroundColor = "#444442";
  buttontop3.style.backgroundColor = "#444442";
  buttontop4.style.backgroundColor = "#444442";
  buttontop5.style.backgroundColor = "#444442";
  buttontop6.style.backgroundColor = "#444442";
}

function buttonTop2(){
  buttontop2.style.backgroundColor = "#E84C3D";
  buttontop1.style.backgroundColor = "#444442";
  buttontop3.style.backgroundColor = "#444442";
  buttontop4.style.backgroundColor = "#444442";
  buttontop5.style.backgroundColor = "#444442";
  buttontop6.style.backgroundColor = "#444442";
}

function buttonTop3(){
  buttontop3.style.backgroundColor = "#E84C3D";
  buttontop2.style.backgroundColor = "#444442";
  buttontop1.style.backgroundColor = "#444442";
  buttontop4.style.backgroundColor = "#444442";
  buttontop5.style.backgroundColor = "#444442";
  buttontop6.style.backgroundColor = "#444442";
}

function buttonTop4(){
  buttontop4.style.backgroundColor = "#E84C3D";
  buttontop2.style.backgroundColor = "#444442";
  buttontop3.style.backgroundColor = "#444442";
  buttontop1.style.backgroundColor = "#444442";
  buttontop5.style.backgroundColor = "#444442";
  buttontop6.style.backgroundColor = "#444442";
}

function buttonTop5(){
  buttontop5.style.backgroundColor = "#E84C3D";
  buttontop2.style.backgroundColor = "#444442";
  buttontop3.style.backgroundColor = "#444442";
  buttontop4.style.backgroundColor = "#444442";
  buttontop1.style.backgroundColor = "#444442";
  buttontop6.style.backgroundColor = "#444442";
}

function buttonTop6(){
  buttontop6.style.backgroundColor = "#E84C3D";
  buttontop2.style.backgroundColor = "#444442";
  buttontop3.style.backgroundColor = "#444442";
  buttontop4.style.backgroundColor = "#444442";
  buttontop5.style.backgroundColor = "#444442";
  buttontop1.style.backgroundColor = "#444442";
}

window.onload = function initialize(){
  buttonteam1.style.backgroundColor = "white";
  buttonteam1.style.color = "black";
  buttonteam2.style.backgroundColor = "white";
  buttonteam2.style.color = "black";
}

function chooseTeam1(){
  buttonteam1.style.backgroundColor = "#E84C3D";
  buttonteam1.style.color = "white";
  buttonteam2.style.backgroundColor = "white";
  buttonteam2.style.color = "black";
}

function chooseTeam2(){
  buttonteam2.style.backgroundColor = "#E84C3D";
  buttonteam2.style.color = "white";
  buttonteam1.style.backgroundColor = "white";
  buttonteam1.style.color = "black";
}

new Twitch.Embed("twitch-embed", {
  width: 854,
  height: 480,
  channel: "BeyondTheSummit",
  layout: "video"
})

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    document.getElementById("confirm").style.display = "none";
    document.getElementById("cancel").style.visibility = "visible";
    document.getElementById("canceltext").style.display = "none";
}


function cancel(){
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  document.getElementById("confirm").style.display = "inline";
  document.getElementById("cancel").style.visibility = "hidden";
  document.getElementById("canceltext").style.display = "inline";
}

function Alert() {
  alert("You have to log in to use this feature.");
}
