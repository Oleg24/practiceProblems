/*
Write a class TempTracker with these methods:

insert()—records a new temperature
getMax()—returns the highest temp we've seen so far
getMin()—returns the lowest temp we've seen so far
getMean()—returns the mean ↴ of all temps we've seen so far
getMode()—returns the mode ↴ of all temps we've seen so far

Optimize for space and time. Favor speeding up the getter functions (getMax(), getMin(), getMean(), and getMode()) over speeding up the insert() function.

Temperatures will all be inserted as integers.
We'll record our temperatures in Fahrenheit, so we can assume they'll all be in the range 0..1100..110.

*/

function TempTracker () {
  // for mode
  this.occurrences = []; // array of 0s at indices 0..110
  for (var i = 0; i < 111; i++) {
    this.occurrences[i] = 0
  }
  this.maxOccurrences = 0
  this.mode = null

  // for mean
  this.totalNumbers = 0
  this.totalSum = 0
  this.mean = null

  // for min and max
  this.minTemp = null
  this.maxTemp = null
}

TempTracker.prototype.insert = function (temperature) {
  // for mode
  this.occurrences[temperature]++
  if (this.occurrences[temperature] > this.maxOccurrences) {
    this.mode = temperature
    this.maxOccurrences = this.occurrences[temperature]
  }

  // for mean
  this.totalNumbers++
  this.totalSum += temperature
  this.mean = this.totalSum / this.totalNumbers

  // for min and max
  if (this.maxTemp === null || temperature > this.maxTemp) {
    this.maxTemp = temperature
  }
  if (this.minTemp === null || temperature < this.minTemp) {
    this.minTemp = temperature
  }
}

TempTracker.prototype.getMax = function () {
  return this.maxTemp
}

TempTracker.prototype.getMin = function () {
  return this.minTemp
}

TempTracker.prototype.getMean = function () {
  return this.mean
}

TempTracker.prototype.getMode = function () {
  return this.mode
}
