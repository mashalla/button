Accessible Button
===========

Provides a class that makes an input button accessible or tranfers it to a accessible toggle button

![Screenshot](http://www.accessiblemootoolsdemo.iao.fraunhofer.de/Mootools_Widgets/WidgetThumbs/Button.png)

How to use
----------

	#HTML
	<input class='button' id="MooAccessButton" type="button" value="Push me" onclick="alert('You pushed the button successfully.')"/>

	#JS
	window.addEvent('domready', function() {
		var mooAccessButton = new AccessibleButton({
			'button' : $('MooAccessButton'), // input button element
			'ariaDescription' : 'MooAccessButtonDescription' // allows you to define a element that describes the button
		})
		var mooAccessToggleButton = new AccessibleButton({
			'button' : $('MooAccessToggleButton'),
			'ariaDescription' : 'MooAccessToggleButtonDescription',
			'toggle' : true,
			'clickFunction' : function(e) { // event function for pressing the button
				$('buttonLive').set('html','Button pressed.')
			},
			'releaseFunction' : function(e) { // event function for releasing the button
				$('buttonLive').set('html','Button released.')
			}
		})
	});
