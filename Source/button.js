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

var AccessibleButton = new Class({
	Implements : [Options, Events],

	options : {
		button : null,
		classPrefix : 'MooAccessButton',
		ariaDescription : null,
		toggle : false,
		clickFunction : function(e) {
		}.bind(this),
		releaseFunction : function(e) {
		}.bind(this)
	},
	initialize : function(options) {
		this.setOptions(options);
		if(!this.options.button)
			return;

		this.options.button.setProperty('role', this.options.button);
		if(this.options.ariaDescription) {
			this.options.button.setProperty('aria-describedby', this.options.ariaDescription)
		}
		if(this.options.toggle) {
			this.options.button.setProperty('aria-pressed', 'false');
			this.pressed = false;
			this.options.button.addEvent('click', function() {
				if(this.pressed) {
					this.options.button.setProperty('aria-pressed', 'false');
					this.options.button.removeClass('pressed');
					this.pressed = false;
					this.options.releaseFunction();
				} else {

					this.options.button.setProperty('aria-pressed', 'true');
					this.options.button.addClass('pressed');
					this.pressed = true;
					this.options.clickFunction();
				}
			}.bind(this));
		}
	}
});
