# scrolltracker.js
scrolltrack.js

This tracks a users scroll location on the y axis and returns the user to that location on refresh by storing the data in a cookie.  You can apply a frequency for the function to check and a cookie duration.

ex:

$.positionTrack()    
$.positionTrack(1)    
$.positionTrack(1,365*3)    

Requires jscookie https://github.com/js-cookie/js-cookie
