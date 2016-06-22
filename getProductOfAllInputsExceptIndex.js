// example
// input [1, 7, 3, 4]
// returns [84, 12, 28, 21]
// by calculating [7*3*4, 1*2*3, 1*7*4, 1*7*3]

/* time complexity: O(n^2) */
function getProductsOfAllIntsExceptAtIndex (inputArray) {
  var result = []
  for (var i = 0; i < inputArray.length; i++) {
    var idx = i
    var currentProduct = 1
    for (var j = 0; j < inputArray.length; j++) {
      if (j != idx) {
        currentProduct *= inputArray[j]
      }
    }
    result.push(currentProduct)
  }
  return result
}

/* time complexity: O(2n) */
function getProductsOfAllIntsExceptAtIndex (inputArray) {
  var productOfAllTheIntegersBeforeAndAfterIdx = []

  var productSoFar = 1
  for (var i = 0; i < inputArray.length; i++) {
    productOfAllTheIntegersBeforeAndAfterIdx[i] = productSoFar
    productSoFar *= inputArray[i]
  }

  productSoFar = 1
  for (var j = inputArray.length - 1; j >= 0; j--) {
    productOfAllTheIntegersBeforeAndAfterIdx[j] = productOfAllTheIntegersBeforeAndAfterIdx[j] * productSoFar
    productSoFar *= inputArray[j]
  }
  return productOfAllTheIntegersBeforeAndAfterIdx
}

/* start with the brute force solution
   look for any repeating patterns
   and modify to only do that work once */
