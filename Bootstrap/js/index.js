var ongoingmatches = document.getElementById("ongoing-matches");
var upcomingmatches = document.getElementById("upcoming-matches");
var finishedmatches = document.getElementById("finished-matches");
var streamingbox = document.getElementById("streaming-box");
var matchbox2 = document.getElementById("matchbox2");
var streaming = document.getElementById("streaming");
var ongoing = document.getElementById("ongoing");
var upcoming = document.getElementById("upcoming");
var finished = document.getElementById("finished");

function Ongoing() {
  ongoingmatches.style.display = "inline";
  upcomingmatches.style.display = "none";
  finishedmatches.style.display = "none";
  streamingbox.style.display = "none";

  ongoing.className = "btn btn-primary";
  upcoming.className = "btn btn-secondary";
  finished.className = "btn btn-secondary";
}

function Upcoming() {
  ongoingmatches.style.display = "none";
  upcomingmatches.style.display = "inline";
  finishedmatches.style.display = "none";
  streamingbox.style.display = "none";


  ongoing.className = "btn btn-secondary";
  upcoming.className = "btn btn-primary";
  finished.className = "btn btn-secondary";
}

function Finished() {
  ongoingmatches.style.display = "none";
  upcomingmatches.style.display = "none";
  finishedmatches.style.display = "inline";
  streamingbox.style.display = "none";


  ongoing.className = "btn btn-secondary";
  upcoming.className = "btn btn-secondary";
  finished.className = "btn btn-primary";
}

function livestream(){
  matchbox2.style.display = "none";
  streamingbox.style.display = "inline";
  document.getElementById('onlink').id = 'matchbox3';
  document.getElementById('stream1').id = 'onlink';

}

function matchbox(){
  matchbox2.style.display = "inline";
  streamingbox.style.display = "none";
  document.getElementById('onlink').id = 'stream1';
  document.getElementById('matchbox3').id = 'onlink';


}




window.onload = Ongoing();
