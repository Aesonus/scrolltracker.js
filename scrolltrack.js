// function $.scrollTrack
//authors: Steve and Robert Williams
// Description: Tracks the user's scroll position and reapplies position on page refresh.
//parameters:
//     first parameter stores the scroll position polling frequency in seconds, defaults to 2 seconds
//     second parameter stores the expiration time in days of the cookie that is used to hold the scroll position
// Usage example 1: $.positionTrack()
// Usage example 2: $.positionTrack(1)
// Usage example 2: $.positionTrack(1, 365*5)
//
// The function should ideally be called from within jQuery $(document).ready block.



$.scrollTrack = function(seconds, expiredays) {

	if (typeof seconds === 'undefined') seconds = 2;
	if (typeof expiredays === 'undefined') expiredays = 365;
	var position = Cookies.get('position');
	if (typeof position === 'undefined') {
		position = document.scrollingElement.scrollTop;
		Cookies.set('position',position,{expires: expiredays});
	}
	window.scrollBy(0,position);
	
setInterval(function() {
		var position = Cookies.get('position');
		if ($.scrollY == position) return;
		position = document.scrollingElement.scrollTop
		Cookies.set('position',position,{expires: expiredays});
	},1000*seconds);
	
};
