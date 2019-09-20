// use localStorage and click count to keep track of votes
function clickFrankenstein() {
    if (typeof(Storage) !== "undefined") {
    if (localStorage.clickFrank) {localStorage.clickFrank = Number(localStorage.clickFrank)+1;} 
    else {localStorage.clickFrank = 1;}} 
}
function clickPumpkin() {
    if (typeof(Storage) !== "undefined") {
    if (localStorage.clickPumpkin) {localStorage.clickPumpkin = Number(localStorage.clickPumpkin)+1;} 
    else {localStorage.clickPumpkin = 1;}} 
}

function clickGhost() {
    if (typeof(Storage) !== "undefined") {
    if (localStorage.clickGhost) {localStorage.clickGhost = Number(localStorage.clickGhost)+1;} 
    else {localStorage.clickGhost = 1;}}
}
function clickWaldo() {
    if (typeof(Storage) !== "undefined") {
    if (localStorage.clickWaldo) {localStorage.clickWaldo = Number(localStorage.clickWaldo)+1;} 
    else {localStorage.clickWaldo = 1;}}
}
function clickTeddy() {
    if (typeof(Storage) !== "undefined") {
    if (localStorage.clickTeddy) {localStorage.clickTeddy = Number(localStorage.clickTeddy)+1;} 
    else {localStorage.clickTeddy = 1;}} 
 }
// convert clicks to integers so a % can be calculated
var Frank = parseInt(localStorage.clickFrank);
var Pump = parseInt(localStorage.clickPumpkin);
var Gho = parseInt(localStorage.clickGhost);
var Wal = parseInt(localStorage.clickWaldo);
var Ted = parseInt(localStorage.clickTeddy);
var sum = Frank+Pump+Gho+Wal+Ted;
// Display results once Display button is clicked on # of best costume votes
// Math.floor eliminates decimals
  function displayResults(){
    document.getElementById("resultFrank").innerHTML = "Frankenstein votes: " + Math.floor(Frank/sum*100) + "%";
    document.getElementById("resultPumpkin").innerHTML = "Pumpkin votes: " + Math.floor(Pump/sum*100) + "%";
    document.getElementById("resultGhost").innerHTML = "Ghost votes: " + Math.floor(Gho/sum*100) + "%";
    document.getElementById("resultWaldo").innerHTML = "Where's Waldo votes: " + Math.floor(Wal/sum*100) + "%";
    document.getElementById("resultTeddy").innerHTML = "Teddy Bear votes: " + Math.floor(Ted/sum*100) + "%";
  }