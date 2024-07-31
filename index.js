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

 console.log("Elements retrieved:", {messageEl, sumEl, cardsEl, playerEl, startGameBtn, newCardBtn});
 playerEl.textContent = player.name + ": $" + player.chips

 function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
      return 10
  } else if (randomNumber === 1) {
      return 11
  } else {
      return randomNumber
  }
}
