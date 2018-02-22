jQuery( document ).ready( function( $ ) {
	$( document ).on( 'scroll', onScroll );

    $( '.sidebar a' ).click(function( event ) {
        event.preventDefault();
        var headerHeight = $( '#top' ).outerHeight() + 20;
        $( 'html, body' ).animate( { scrollTop: $( $( this).attr( 'href' ) ).offset().top - headerHeight }, 500 );
    } );

    $( '.sidebar a:first' ).addClass( 'active' );
} );

function onScroll( event ){
    var scrollPos = $( document ).scrollTop() + 20;
    var $headers = $( ':header' );
    $( '.sidebar a' ).each( function () {
        var currLink = $( this );
        var refElement = $( currLink.attr( 'href' ) );
        /*
         * Get our section height by:
         * 1) Find our next H tag.
         * b) Subtract the current top from the top of the next H tag.
         */
        var $nextHeader = $headers.eq( $headers.index( refElement ) + 1 );
        var sectionHeight = refElement.height();
        if ( 0 != $nextHeader.length ) {
        	sectionHeight = $nextHeader.position().top;
        }

        if ( refElement.position().top <= scrollPos && sectionHeight > scrollPos ) {
            $( '.sidebar a' ).removeClass( "active" );
            currLink.addClass( 'active' );

            if( history.pushState ) {
			    history.pushState( null, null, currLink.attr( 'href' ) );
			}
			else {
			    location.hash = currLink.attr( 'href' );
			}
        }
        else{
            currLink.removeClass( 'active' );
        }
   	});
}