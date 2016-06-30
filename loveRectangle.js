/*
Write a function to find the rectangular intersection of two given love rectangles.

As with the example above, love rectangles are always "straight" and never "diagonal."
More rigorously: each side is parallel with either the x-axis or the y-axis.

var myRectangle = {

    // coordinates of bottom-left corner
    leftX: 1,
    bottomY: 5,

    // width and height
    width: 10,
    height: 4,

}

time complexity O(n)
*/

function loveRectangle (rectangleOne, rectangleDos)
  var xOverlap = findXOverlap(rectangleOne, rectangleDos);
  var yOverlap = findYOverlay(rectangleOne, rectangleDos);

  return {
    leftX: xOverlap.smallerX,
    bottomY: yOverlap.smallerY
    width: xOverlap.xOverlap,
    height: yOverlap.yOverlap
  }
}

function findXOverlap (rectA, rectB) {
  var xOverlap
  rectA.rightX = rectA.leftX + rectA.width
  rectB.rightX = rectB.leftX + rectB.width
  if (rectB.rightX > rectA.rightX) {
    xOverlap = rectA.rightX - rectB.leftX
    smallerX = rectB.leftX
  }
  if (rectB.leftX > rectA.leftX) {
    xOverlap = rectA.leftX - rectB.rightX
    smallerX = rectB.rightX
  }
  // if(rectA.leftX > rectB.leftX){
  //   xOverlap = rectB.leftX - rectA.rightX
  //   smallerX = rectA.rightX
  // }
  // if(rectA.rightX > rectB.rightX){
  //   xOverlap = rectB.rightX - rectA.leftX
  //   smallerX = rectA.leftX
  // }

  return {
    xOverlap: xOverlap,
    smallerX: smallerX
  }
}

function findYOverlay (rectA, rectB) {
  var yOverlap
  var smallerY
  rectA.topY = rectA.bottomY + rectA.height
  rectB.topY = rectB.bottomY + rectB.height

  if (rectA.topY > rectB.topY) {
    yOverlap = rectB.topY - rectA.bottomY
    smallerY = rectA.bottomY
  }
  if (rectB.topY > rectA.topY) {
    yOverlap = rectA.topY - rectB.bottomY
    smallerY = rectB.bottomY
  }
  return {
    yOverlap: yOverlap,
    smallerY: smallerY
  }
}
