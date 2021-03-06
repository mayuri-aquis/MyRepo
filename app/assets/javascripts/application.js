// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery-2.2.4.min.js
//= require jquery_ujs
//= require turbolinks
//= require jquery.livequery.min.js
//= require mask-secure.js
//= require_tree 

$(document).ready(function() {
	$('.mask').livequery(function() {
 		$(this).mask();
 		console.log('mask');
	});
});
function showErrors(src) {
	console.log(src);
	$.each(src, function(attr, error) {
		console.log(error);
		if ($('#' + attr).nextAll('.error').length > 0) {
			$('#' + attr).nextAll('.error').first().text(error.join(', '))
		}
		else {
			$('#' + attr).after("<div class='error'>" + error.join(', ') + '</div>')
		}
	})
}