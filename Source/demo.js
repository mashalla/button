/*
---
script: button.js
description: ---
license: MIT-style license
authors:
- Christian Merz
requires:
- core:1.4/Element.Event
provides: [AccessibleButton]
...
*/
window.addEvent('domready', function() {
	var mooAccessButton = new AccessibleButton({
		'button' : $('MooAccessButton'),
		'ariaDescription' : 'MooAccessButtonDescription'
	})
	var mooAccessToggleButton = new AccessibleButton({
		'button' : $('MooAccessToggleButton'),
		'ariaDescription' : 'MooAccessToggleButtonDescription',
		'toggle' : true,
		'clickFunction' : function(e) {
			$('buttonLive').set('html','Button pressed.')
		},
		'releaseFunction' : function(e) {
			$('buttonLive').set('html','Button released.')
		}
	})
});
