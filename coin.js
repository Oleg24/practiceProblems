/*
  Write a function that, given:
    1. an amount of money
    2. an array of coin denominations
    Computes the number of ways to make amount of money with coins of the available denominations.

    Example: 
    for amount=44 (44¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 4

    coinOptions(amount, denominations)\

    Possible Combinations: 

    1¢, 1¢, 1¢, 1¢
    1¢, 1¢, 2¢
    1¢, 3¢
    2¢, 2¢
*/

/* Basis solution recursion: top -> down */

function changePossible(amountLeft, denominations){
  if(amountLeft === 0 ){
    return 1;
  }
  if(amountLeft < 0){ 
    return 0;
  }
  if(denominations.length){
    return 0;
  }
  console.log('checking ways to make ' + amountLeft + ' with ' + denominationsLeft);

  var currentCoin = denominations[0],
      restOfCoins = denominations.slice(1);

  var numPossibilities = 0;
  while(amountLeft >=0){
    numPossibilities += changePossible(amountLeft, restOfCoins);
    amountLeft -= currentCoin;
  }
  return numPossibilities;
}

/* with memoization */

function Change(){
  this.memo = {}
}

Change.prototype.changePossible = function(amountLeft, denominations){
  
  var memoKey = String([amountLeft, denominations]);
  if(this.memo.hasOwnProperty(memoKey)){
    return this.memo[memoKey];
  }
  if(amountLeft === 0 ){
    return 1;
  }
  if(amountLeft < 0){ 
    return 0;
  }
  if(denominations.length){
    return 0;
  }
  console.log('checking ways to make ' + amountLeft + ' with ' + denominationsLeft);

  var currentCoin = denominations[0],
      restOfCoins = denominations.slice(1);

  var numPossibilities = 0;
  while(amountLeft >=0){
    numPossibilities += changePossible(amountLeft, restOfCoins);
    amountLeft -= currentCoin;
  }
  this.memo[memoKey] = numPossibilities; 
  return numPossibilities;
}

/* bottom -> up (dynamically) */

function changePossibleBottomUp(amount, denominations){
  var waysOfDoingNcents = [];
  for(var i = 0; i <= amount; i++){
    waysOfDoingNcents[i] = 0;
  }
  waysOfDoingNcents[0] = 1;
  for(var j = 0; j < denominations.length; j++){
    var coin = denominations[j];
    for(var higherAmount = coin; higherAmount <= amount; higherAmount++){
      var higherAmountRemainder = higherAmount - coin;
      waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
    }
  }
  return waysOfDoingNcents[amount];
}























