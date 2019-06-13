// function $.scrollTrack
// authors: Steve and Robert Williams
// contributors: Cory Laughlin
// Description: Tracks the user's scroll position and reapplies position on page refresh.
// parameters:
//     first parameter stores the scroll position polling frequency in seconds, defaults to 2 seconds
//     second parameter stores the expiration time in days of the cookie that is used to hold the scroll position
//     of the first matched element. Typical usage would be on the document
// Usage example 1: $(document).scrollTrack()
// Usage example 2: $(document).scrollTrack(1)
// Usage example 2: $(document).scrollTrack(1, 365*5)
//
// To use multiple scroll trackers, use the data-tracker-id attribute in the tracked element
// Usage example 3:
// HTML:
// <textarea id='#my-element' data-tracker-id='my-element'>...</textarea>
// JAVASCRIPT:
// $('#my-element').scrollTrack();
//
// The document element always takes on the id of 'document'
//
// The function should ideally be called from within jQuery $(document).ready event.
// returns: interval id

(function ($) {
	$.fn.scrollTrack = function(seconds, expiredays) {
		var getPosition = function (id) {
			try {
				var data = JSON.parse(Cookies.get('position'));
			} catch (SyntaxError) {
				return ;
			}
			if (data.hasOwnProperty(id)) {
				return JSON.parse(Cookies.get('position'))[id];
			}
		};
		var setCookies = function (id, position) {
			var data = $.extend(JSON.parse(Cookies.get('position')), {[id]: position});
			console.log(data);
			Cookies.set('position', data, {expires: expiredays});
		}
		var $this = $(this[0]);
		var id;
		if (this[0] === document) {
			id = 'document';
		} else {
			id = $this.data('trackerId').toString();
		}
		if (typeof seconds === 'undefined') seconds = 2;
		if (typeof expiredays === 'undefined') expiredays = 365;
		var position = getPosition(id);
		if (typeof position === 'undefined') {
			position = $this.scrollTop();
			setCookies(id, position);
		} else {
			$this.scrollTop(position);
		}
	return setInterval(function() {
			var position = getPosition();
			if ($this.scrollTop() == position) return;
			position = $this.scrollTop();
			setCookies(id, position);
		},1000*seconds);
	}
})(jQuery);