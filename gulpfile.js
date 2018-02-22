/**
 * Gulpfile
 *
 * Rename and Minify JavaScript... and more (later).
 *
 * Install Command:
 * npm install
 *
 * Running Command:
 * npm run gulp
 */

var gulp    = require( 'gulp' );
var cheerio = require( 'gulp-cheerio' );

gulp.task( 'generateFrontMatter', function () {
  return gulp
    .src( '*/*.md', { base: "./" } )
    .pipe( cheerio( function ( $, file ) {
        /*
         * Replace any current YAML front matter.
         */
        var trimmedHTML = $.root().html().replace( /---([\S\s]*?)-->/g, '' );
        /*
         * Trim whitespace from the beginning and end of our md.
         */
        trimmedHTML = trimmedHTML.trim();
        /*
         * Update our HTML element.
         */
        $.root().html( trimmedHTML );

        /*
         * Get our doc title and slug from the first H2 we find on the page.
         */
        var docTitle = false;
        var docSlug = false;
        $( 'h2' ).each( function () {
            var h2 = $( this );
            docTitle = h2.text();
            docSlug = slugify( h2.text() );
            h2.attr( 'id', docSlug );
        } );

        /*
         * Make sure all our img tags have a valid src
         */
         $( 'img' ).each( function() {
            var currentSrc = $( this ).attr( 'src' );
            if ( -1 == currentSrc.indexOf( '{{ site_url }}/assets/img/{{ page.slug }}/' ) ) {
                $( this ).attr( 'src', '{{ site_url }}/assets/img/{{ page.slug }}/' + currentSrc );
            }
         } );

        /*
         * Loop over all of our H3 and H4 tags so that we can:
         * 1) Give each an id attribute
         * 2) Get a record of each to add to our front matter.
         */
        var sections = {};
        var currentH3 = '';
        $( 'H3, H4' ).each( function() {
            /*
             * Get our heading slug and set the heading's id attribute.
             */
            var headingSlug = slugify( $( this ).text() );
            $( this ).attr( 'id', headingSlug );

            /*
             * Add this heading to our section object.
             */
            if ( 'H3' == $( this ).prop( 'tagName' ) ) {
                /*
                 * This is an H3 tag, so it goes into our top level.
                 */
                sections[ headingSlug ] = {};
                sections[ headingSlug ][ 'H3' ] = $( this ).text();
                sections[ headingSlug ][ 'H4' ] = {};
                currentH3 = headingSlug;
            } else {
                /*
                 * This is an H4 tag, so it goes into the current H3 level.
                 */
                sections[ currentH3 ][ 'H4' ][ headingSlug ] = $( this ).text();
            }
        } );

        var frontMatterSections = '';
        for ( var H3slug in sections ) {
            if ( sections.hasOwnProperty( H3slug ) ) {
frontMatterSections += 
 ` - slug: ` + H3slug + `
    name: ` + sections[ H3slug ][ 'H3' ] + `
 `;

                if ( Object.keys( sections[ H3slug ][ 'H4' ] ).length != 0 && sections[ H3slug ][ 'H4' ].constructor === Object ) {
frontMatterSections += 
`   sections:
`;
                    var counter = 0;
                    for ( var H4slug in sections[ H3slug ][ 'H4' ] ) {
                        if ( sections[ H3slug ][ 'H4' ].hasOwnProperty( H4slug ) ) {
                            if ( 0 == counter ) {
                                frontMatterSections += ' ';
                            }
frontMatterSections += 
 `     - slug: ` + H4slug + `
        name: ` + sections[ H3slug ][ 'H4' ][ H4slug ] + `
 `;
                        counter++;
                        }
                    }
                }


            }
        }
        frontMatterSections = frontMatterSections.trim();

      frontMatter = `---
title: ` + docTitle + `
tags: templates, fields
slug: ` + docSlug + `
sections:
  ` + frontMatterSections + `
---
<!-- Content Starts Below This Line -->
`

      $.root().prepend( frontMatter );

    }))
    .pipe(gulp.dest('./'));
});

// Watch Files For Changes
gulp.task( 'watch', function() {
    gulp.watch( '*/*.md', [ 'generateFrontMatter' ] );
});

// Default Task
gulp.task('default', [ 'generateFrontMatter' ]);


var slugify = function( text )
{
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}