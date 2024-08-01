document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM fully loaded");
  
  let player = {
      name: "Player", 
      chips: 1000
  }

  let cards = [];
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

  function startGame() {
    console.log("startGame function called");
    if (player.chips >= 100) {
        player.chips -= 100
        playerEl.textContent = player.name + ": $" + player.chips
        isAlive = true
        hasBlackJack = false
        let firstCard = getRandomCard()
        let secondCard = getRandomCard()
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard
        console.log("Game started with cards:", cards, "sum:", sum);
        renderGame()
    }
  }

  function renderGame() {
    console.log("renderGame function called");
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
        player.chips += 300
        playerEl.textContent = player.name + ": $" + player.chips
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    console.log("Game rendered. Message:", message);
  }

  function newCard() {
    console.log("newCard function called");
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
  }

  if (startGameBtn) {
    startGameBtn.addEventListener("click", startGame);
    console.log("Start Game button listener added");
  }

  if (newCardBtn) {
    newCardBtn.addEventListener("click", newCard);
    console.log("New Card button listener added");
  }

  messageEl.textContent = "Press 'Start Game' to begin!"
  console.log("Initial message set");
});