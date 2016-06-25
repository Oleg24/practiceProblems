/* Write a function condenseMeetingTimes() that takes an array of meeting time
*  ranges and returns an array of condensed ranges.
*
*  input: [
      {startTime: 0,  endTime: 1},
      {startTime: 3,  endTime: 5},
      {startTime: 4,  endTime: 8},
      {startTime: 10, endTime: 12},
      {startTime: 9,  endTime: 10},
    ]

    output: [
      {startTime: 0, endTime: 1},
      {startTime: 3, endTime: 8},
      {startTime: 9, endTime: 12},
    ]

    Do not assume the meetings are in order.
    The meeting times are coming from multiple teams.

    Write a solution that's efficient even when we can't put a nice upper bound
    on the numbers representing our time ranges. Here we've simplified our times
    down to the number of 30-minute slots past 9:00 am. But we want the function
    to work even for very large numbers, like Unix timestamps. In any case, the
    spirit of the challenge is to merge meetings where startTime and endTime
    don't have an upper bound.

*/

/*
  sorting takes O(n*log*n)

  time complexity: O(n log n)

  sort the input based on startTime
  set the timeRange to the first item in the input

  iterate over the input array

    if the item we are iterating over's startime is after the end of our current timeRange endTime
      that means there is no overlap
      push the timeRange to the results array
      update the time range to the item we are currently looking at

    else if the item we are iterating over's startime is between the timeRange startime and endTime
      that means there is overlap
      and we need to update the end time to that items end time

   push the last item to the results array
   return the results array
*/

function condenseMeetingTimes (input) {
  var results = []
  input = input.sort(function (a, b) { return a.startTime > b.startTime})
  var timeRange = {
    startTime: input[0].startTime,
    endTime: input[0].endTime
  }
  for (var i = 1; i < input.length; i++) {
    var currentTime = input[i]
    if (currentTime.startTime > timeRange.endTime) {
      results.push(timeRange)
      timeRange.startTime = (function () {
        return input[i].startTime
      })(i)
      timeRange.endTime = (function () {
        return input[i].endTime
      })(i)
    } else if (!(currentTime.endTime < timeRange.endTime)) {
      timeRange.endTime = (function () {
        return input[i].endTime
      })(i)
    }
  }
  results.push(timeRange)
  return results
}
