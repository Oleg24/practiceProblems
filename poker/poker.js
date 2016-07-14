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

Poker = (function($) {

    var cardBaseURL = "http://h3h.net/images/cards/{suit}_{card}.svg";
    var suits = ['spade', 'heart', 'diamond', 'club'];
    var cards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    // *-* public methods *-*

    var init = function() {
        $(".buttons button").on("click", eventPlayAgainClicked);
    };

    // *-* utility methods *-*

    var makeHand = function() {
        var hand = [],
            suitsLength = suits.length,
            cardsLength = cards.length;
        for(var i = 0; i < 5; i++){
          var randomSuit = suits[Math.floor(Math.random()*(suitsLength+1))];
          var randomCard = cards[Math.floor(Math.random()*(cardsLength+1))];
          hand.push({
            suit: randomSuit,
            value: randomCard
          });
        }
    };

    var displayCard = function(cards, cardArea){
      for(var i = 0; i < cards.length; i++){
        cardArea.append('<img src="http://h3h.net/images/cards/'+ cards[i].suit + '_'+ cards[i].value + '.svg class="card">');
      }
    };

    var makePlayerOneHand = function(){
      var player1Hand = makeHand();
      var cardArea = $('.hand')[0];
      displayCard(player1Hand, cardArea);
      console.log(player1Hand);
    };

    var makerPlayerTwoHand = function(){
      var player2Hand = makeHand();
      var cardArea = $('.hand')[1];
      displayCard(player2Hand, cardArea);
      console.log(player2Hand);
    };

    // *-* event methods *-*

    var eventPlayAgainClicked = function() {
        // ...
    };

    // expose public methods
    return {
        init: init
    };
})(jQuery);

$(document).ready(Poker.init);

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
