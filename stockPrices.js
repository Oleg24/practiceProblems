var stockPrices = [45, 44.4, 44.2, 44.8, 45, 45.1, 44.7, 44.9, 45.9, 45]
var diminishStockPrices = [45, 44, 43, 42, 41, 40]

// greedy approch
// o(n) time complexity --> 1 iteration, keeping track of key variables

var maxStockProfit = function (stockPrices) {
  var minPrice = stockPrices[0]
  var maxProfit = stockPrices[1] - stockPrices[0]

  for (var i = 1; i < stockPrices.length; i++) {
    var currentStockPrice = stockPrices[i]
    var potentialProfit = currentStockPrice - minPrice

    maxProfit = Math.max(maxProfit, potentialProfit)
    minPrice = Math.min(minPrice, currentStockPrice)
  }
  return maxProfit
}

console.log(maxStockProfit(stockPrices))
console.log(maxStockProfit(diminishStockPrices))
