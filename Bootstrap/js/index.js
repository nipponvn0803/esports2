var ongoingmatches = document.getElementById("ongoing-matches");
var upcomingmatches = document.getElementById("upcoming-matches");
var finishedmatches = document.getElementById("finished-matches");
var ongoing = document.getElementById("ongoing");
var upcoming = document.getElementById("upcoming");
var finished = document.getElementById("finished");

function Ongoing() {
  ongoingmatches.style.display = "inline";
  upcomingmatches.style.display = "none";
  finishedmatches.style.display = "none";

  ongoing.className = "btn btn-primary";
  upcoming.className = "btn btn-secondary";
  finished.className = "btn btn-secondary";
}

function Upcoming() {
  ongoingmatches.style.display = "none";
  upcomingmatches.style.display = "inline";
  finishedmatches.style.display = "none";

  ongoing.className = "btn btn-secondary";
  upcoming.className = "btn btn-primary";
  finished.className = "btn btn-secondary";
}

function Finished() {
  ongoingmatches.style.display = "none";
  upcomingmatches.style.display = "none";
  finishedmatches.style.display = "inline";

  ongoing.className = "btn btn-secondary";
  upcoming.className = "btn btn-secondary";
  finished.className = "btn btn-primary";
}


window.onload = Ongoing();
