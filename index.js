document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded");
  let playerName = prompt("Please Enter your name:", 'Guest');
  let player = {
      name: playerName,
      chips: 200
  }
  if (playerName == null || playerName == "") player.name = "Guest";
  let cards = []
 let sum = 0
 let hasBlackJack = false
 let isAlive = false
 let message = ""
 let messageEl = document.getElementById("message-el")
 let sumEl = document.getElementById("sum-el")
 let cardsEl = document.getElementById("cards-el")
 let playerEl = document.getElementById("player-el")
 let startGameBtn = document.getElementById("start-game-btn")
 let newCardBtn = document.getElementById("new-card-btn")
