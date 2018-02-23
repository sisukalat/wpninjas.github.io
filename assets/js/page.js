jQuery.fn.reverse = [].reverse;

jQuery( document ).ready( function( $ ) {
	$( document ).on( 'scroll', onScroll );
    $( '.sidebar a:first' ).addClass( 'active' );
} );

function onScroll( event ){
    var scrollPos = $( document ).scrollTop() + 20;
    var $headers = $( 'h2, h3, h4' );

    $( '.sidebar a' ).reverse().each( function() {
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

            /*
             * If this item is a section or second-level menu item.
             */
            if ( 'section' == currLink.data( 'type' ) ) {
            	/*
            	 * Select any items that belong within this section and have the active class.
            	 */
            	if ( 0 == $( '.active[data-section="' + currLink.data( 'section' ) + '"]' ).length ) {
            		/*
            		 * If no items are found, then hide this section's sub section.
            		 */
            		currLink.next( '.sub-section' ).slideUp();
            	}
            }
        }
   	});

}