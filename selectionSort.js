/* Selection Sort 
    Find the smallest card. Swap it with the first card.
    Find the second-smallest card. Swap it with the second card.
    Find the third-smallest card. Swap it with the third card.
    Repeat finding the next-smallest card, and swapping it into the correct position until the array is sorted.

    time complexity; O(n^2)
*/



var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

var indexOfMinimum = function(array, startIndex) {

    var minValue = array[startIndex];
    var minIndex = startIndex;

    for(var i = minIndex + 1; i < array.length; i++) {
        if(array[i] < minValue) {
            minIndex = i;
            minValue = array[i];
        }
    } 
    return minIndex;
}

var selectionSort = function(array) {
 var idx;
 for(var i = 0; i < array.length; i++){
    idx = indexOfMinimum(array,i);
    swap(array, i, idx);
 }
}
