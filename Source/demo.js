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
			var live = $('buttonLive');
			live.setHTML('Button pressed.')
		},
		'releaseFunction' : function(e) {
			$('buttonLive').setHTML('Button released.')
		}
	})
});
