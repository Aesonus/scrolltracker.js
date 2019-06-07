# scrolltracker.js
scrolltrack.js

// function $.scrollTrack
// Description: Enable tracking of web page scroll position
// parameters:
//     seconds: the frequency, i.e. in every this number of seconds the page scroll position will be queried, default is 2 seconds
//     expiredays: number of days cookies will be effective to store position data, default is 365 days
// Usage example 1: $.positionTrack()
// Usage example 2: $.positionTrack(1)
// Usage example 2: $.positionTrack(1, 365*5)
//
// The function can normally be called from within jQuery $(document).ready block.

This tracks a users scroll location on the y axis and returns the user to that location on refresh by storing the data in a cookie.  You can apply a frequency for the function to check and a cookie duration.

Requires jscookie https://github.com/js-cookie/js-cookie
