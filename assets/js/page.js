jQuery( document ).ready( function( $ ) {
	$( document ).on( 'scroll', onScroll );

    $( '.sidebar a' ).click(function( event ) {
        event.preventDefault();
        var target = $( $( this).attr( 'href' ) );
        var headerHeight = $( '#top' ).outerHeight() + 10;
        $( 'html, body' ).animate( { scrollTop: target.offset().top - headerHeight }, 500 );
        target.focus(); // Setting focus
        if (target.is(":focus")){ // Checking if the target was focused
          return false;
        } else {
          target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          target.focus(); // Setting focus
        };
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

        if ( refElement.position().top - 20 <= scrollPos && sectionHeight > scrollPos ) {
            $( '.sidebar a' ).removeClass( "active" );
            currLink.addClass( 'active' );

            if( history.pushState ) {
			    history.pushState( null, null, currLink.attr( 'href' ) );
			}
			else {
			    location.hash = currLink.attr( 'href' );
			}

			/*
			 * If we're in a sub-section, we need to check our grandparent
			 * element to ensure that our menu items are visible.
			 */
			
			currLink.parent().parent().slideDown();
			currLink.next( '.sub-section' ).slideDown();
        } else{
            currLink.removeClass( 'active' );
        }
   	});

}