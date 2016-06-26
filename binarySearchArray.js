var doSearch = function(array, targetValue) {
  var min = 0;
  var max = array.length - 1;
    var guess;
    while(min < max){
        guess = Math.floor((max+min)/2);
        if(targetValue === array[guess]){
            return guess;
        } else if (array[guess] > targtValue){
            max =  guess - 1; 
        } else {
            min = guess + 1;
          }
    }
  return -1;
};