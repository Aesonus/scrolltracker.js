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
