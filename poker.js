/*
  # Programming Proficiency Test

  Assumes basic JavaScript knowledge; jQuery knowledge helps a lot.

  ## Exercises

  1. Clicking the button should generate two random hands in memory (console.log).
  2. Clicking the button should render two random hands on the page as cards.
      ** <img src="http://h3h.net/images/cards/diamond_3.svg" class="card">
  3. Determine the winning hand by its number of pairs, add class="winning" to hand.
  4. Determine winning pairs and add class="pair0" (or "pair1" for 2nd pair) to cards.
  5. [Extra Credit] Ensure that 90% of hands have at least one pair.

*/

Poker = (function ($) {
  var cardBaseURL = 'http://h3h.net/images/cards/{suit}_{card}.svg'
  var suits = ['spade', 'heart', 'diamond', 'club']
  var cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    playerOne = {
      displayName: 'Player One',
      idName: 'playerOne',
      handId: 0
    },
    playerTwo = {
      displayName: 'Player Two',
      idName: 'playerTwo',
      handId: 1
  }

  // *-* public methods *-*

  var init = function () {
    clearGame()
    $('.buttons button').on('click', eventPlayAgainClicked)
  }

  function generateRandomNumberArray (length) {
    var randomNumbers = []
    /* First 4 numbers are determined between 0 and the length of the cards array */
    for (var i = 0; i < length - 1; i++) {
      randomNumbers.push(Math.floor(Math.random() * (cards.length)))
    }
    /*
      For the last number
        - 90% of the time choose an existing number from the randomNumbers array
        - 10% of the time choose a number between 0 and the length of the cards array
    */
    var chance = Math.floor(Math.random() * 100)
    var lastNumber = chance <= 90 ? randomNumbers[Math.floor(Math.random() * (randomNumbers.length))] :
      Math.floor(Math.random() * (cards.length))
    randomNumbers.push(lastNumber)
    return randomNumbers
  }

  // *-* utility methods *-*

  var clearGame = function () {
    $('.card').remove()
    $('.winning').removeClass('winning')
  }

  var PlayerHand = function (player) {
    this.displayName = player.displayName
    this.idName = player.idName
    this.handId = player.handId
    this.hand = this.makeHand(this.idName)
    console.log('hand', this.handId, this.hand.cards)
    this.displayCards(this)
    this.findPairs(this.hand)
    return this
  }

  /* create a hand object */
  PlayerHand.prototype.makeHand = function (id) {
    var hand = {
        cards: [],
        numberOfPairs: 0,
        pairs: []
      },
      suitsLength = suits.length

    /* For the card values use this random index array to select cards */
    var randomIndexArray = generateRandomNumberArray(5)
    for (var i = 0; i < 5; i++) {
      /* Find a random number between 0 and the length of the suit array and push that card to hand array
         Create a unique id, to find the card later and add a class if its part of the winning hand
      */
      var randomSuit = suits[Math.floor(Math.random() * suitsLength)]
      var randomCard = cards[randomIndexArray[i]]
      hand.cards.push({
        suit: randomSuit,
        value: randomCard,
        pair: false,
        id: id + randomSuit + randomCard + i
      })
    }
    return hand
  }

  PlayerHand.prototype.displayCards = function (player) {
    for (var i = 0; i < player.hand.cards.length; i++) {
      $($('.hand')[player.handId]).append('<img src="http://h3h.net/images/cards/' + player.hand.cards[i].suit + '_' + player.hand.cards[i].value + '.svg"' + 'class="card" id=' + '"' + player.hand.cards[i].id + '">')
    }
  }

  PlayerHand.prototype.findPairs = function (hand) {
    var pairs = [],
      currentCard,
      comparisonCard
    for (var i = 0; i < hand.cards.length; i++) {
      currentCard = hand.cards[i]
      if (!currentCard.pair) {
        for (var j = i + 1; j < hand.cards.length; j++) {
          comparisonCard = hand.cards[j]
          if (!currentCard.pair && (currentCard.value === comparisonCard.value)) {
            currentCard.pair = true
            comparisonCard.pair = true
            pairs.push([currentCard, comparisonCard])
          }
        }
      }
    }
    hand.pairs = pairs
    hand.numberOfPairs = pairs.length
    return hand
  }

  var Game = function (playerOne, playerTwo) {
    this.playerOne = playerOne
    this.playerTwo = playerTwo
    this.winner = this.getWinner(this.playerOne, this.playerTwo)
  }

  /* Currently this function figures out the winner strictly by the number of
  pairs as stated in the instructions above but this could be expanded to use
  indexOf and the cards array above to determine the highest pair, 3 of a kind,
  and other poker hands */
  Game.prototype.getWinner = function () {
    if (this.playerOne.hand.numberOfPairs !== this.playerTwo.hand.numberOfPairs) {
      return this.playerTwo.hand.numberOfPairs > this.playerOne.hand.numberOfPairs
        ? this.playerTwo : this.playerOne
    } else {
      console.log('Same number of pairs in each hand!')
      return null
    }
  }

  /* iterates over the winning pairs and adds the corresponding pair class to each card in a pair */
  Game.prototype.displayWinner = function (winner) {
    if (winner) {
      $($('.hand')[winner.handId]).addClass('winning')
      var pairs = 0
      for (var i = 0; i < winner.hand.pairs.length; i++) {
        $('#' + winner.hand.pairs[i][0].id).addClass('pair' + pairs)
        $('#' + winner.hand.pairs[i][1].id).addClass('pair' + pairs)
        pairs++
      }
    }
  }
  // *-* event methods *-*

  var eventPlayAgainClicked = function () {
    clearGame()
    playerOne = new PlayerHand(playerOne)
    playerTwo = new PlayerHand(playerTwo)
    game = new Game(playerOne, playerTwo)
    game.displayWinner(game.winner)
  }

  // expose public methods
  return {
    init: init
  }
})(jQuery)

$(document).ready(Poker.init)

/*

The MIT License

Copyright (c) 2012 Brad Fults.

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

*/
