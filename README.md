# scrolltracker.js
scrolltrack.js

This tracks a users scroll location on the y axis and returns the user to that location on refresh by storing the data in a cookie.  You can apply a frequency for the function to check (in second; the default is 2) and a cookie duration (in days).

Load jquery, then js-cookie, then this script, and execute $.positionTrack(), and that's all.

ex:

$.positionTrack()    
$.positionTrack(1)    
$.positionTrack(1, 365*3)    

Requires jscookie https://github.com/js-cookie/js-cookie
