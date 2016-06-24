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

function condenseMeetingTimes (input) {
  var results = []
  input = input.sort(function (a, b) { return a.startTime > b.startTime})
  console.log('input', input)
  var timeRange = {
    startTime: input[0].startTime,
    endTime: input[0].endTime
  }
  for (var i = 1; i < input.length; i++) {
    var currentTime = input[i]
    if (currentTime.startTime > timeRange.endTime) {
      console.log(timeRange)
      results.push(timeRange)
      timeRange.startTime = (function () {
        return input[i].startTime
      })(i)
      timeRange.endTime = (function () {
        return input[i].endTime
      })(i)
    } else {
      timeRange.endTime = (function () {
        return input[i].endTime
      })(i)
    }
  }
  results.push(timeRange)
  return results
}
