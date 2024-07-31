document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded");
  let playerName = prompt("Please Enter your name:", 'Guest');
  let player = {
      name: playerName,
      chips: 200
  }
  if (playerName == null || playerName == "") player.name = "Guest";