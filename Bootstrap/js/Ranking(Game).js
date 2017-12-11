var team1 = document.getElementById("team-1");
var team2 = document.getElementById("team-2");
var detail1 = document.getElementById("detail1");
var detail2 = document.getElementById("detail2");
var arrow = document.getElementById("arrow");

window.onload = showTeam1();

function showTeam1() {
  detail1.style.display = "inline";
  detail2.style.display = "none";
  arrow.style.top = "140px";
}

function showTeam2() {
  detail1.style.display = "none";
  detail2.style.display = "inline";
  arrow.style.top = "190px";
}
