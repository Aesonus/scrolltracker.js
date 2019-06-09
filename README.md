# scrolltracker.js
scrolltrack.js

This tracks a users scroll location on the y axis and returns the user to that location on refresh by storing the data in a cookie.  With the first parameter, you can apply a frequency for the function to check the scroll position (in second; the default is 2).  The second parameter indicates the duration of the cookie (in days).

Load jquery, then js-cookie, then this script, and execute $.positionTrack(), and that's all.

ex:

$.positionTrack()    
$.positionTrack(1)    
$.positionTrack(1, 365*3)    

Requires jscookie https://github.com/js-cookie/js-cookie
