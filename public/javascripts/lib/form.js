require(['jquery'], function( $ ) {

	console.log( 'Phew. We made it...' );

	// Let's save the player
	$( 'body' ).on( 'click', '.submit_button', function( e ) {

		console.log('Click?');

		// Prevent the button from triggering
		e.preventDefault();

		$( this ).prop( 'disabled', true );

		// Grab all of the inputs
		var inputs = $( '.addPlayer :input' );

		// Grab all of the form data.
		var form = {};
		inputs.each( function() {
			form[ this.name ] = $( this ).val();
		});

		form.action = 'addPlayer';

		// Make the ajax request with the form data.
		$.ajax({
			url: "/players",
			data: form,
			type: 'POST',
			success: function( data ){
				console.log( JSON.parse(data) );
			}
		});

	});

});