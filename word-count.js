/* Count on double-byte length character */
function dbCharCount(txt){
  var iCounter = 0;  
  for(var i=0; i<txt.length; i++){
    if(txt.charCodeAt(i)>255){
      iCounter++;
    }
  }
  return iCounter;
}

/* Count on word */
function wordCount(txt){
  var iCounter = 0;  
  for(var i=0; i<txt.length; i++){
    while(txt.charAt(i)==' ' || txt.charCodeAt(i)>255 || txt.charAt(i)=='\n') i++;
    if(txt.charAt(i+1)==' '|| txt.charAt(i+1)=='\n' || txt.charCodeAt(i+1)>255 || i==txt.length-1) iCounter++;
  }
  return iCounter;
}

/* global wordCountL10n */
var wpWordCount;
(function($,undefined) {
	wpWordCount = {

		settings : {
			strip : /<[a-zA-Z\/][^<>]*>/g, // strip HTML tags
			clean : /[0-9.(),;:!?%#$¿'"_+=\\/-]+/g, // regexp to remove punctuation, etc.
			w : /\S\s+/g, // word-counting regexp
			c : /\S/g // char-counting regexp for asian languages
		},

		block : 0,

		wc : function(tx, type) {
			var t = this, w = $('.word-count'), tc = 0;

			if ( type === undefined )
				type = wordCountL10n.type;
			if ( type !== 'w' && type !== 'c' )
				type = 'w';

			if ( t.block )
				return;

			t.block = 1;

			setTimeout( function() {
				if ( tx ) {
					tx = tx.replace( t.settings.strip, ' ' ).replace( /&nbsp;|&#160;/gi, ' ' );
					tx = tx.replace( t.settings.clean, '' );					
					tc = dbCharCount(tx) + wordCount(tx);                    
				}
				w.html(tc.toString());

				setTimeout( function() { t.block = 0; }, 2000 );
			}, 1 );
		}
	};

	$(document).bind( 'wpcountwords', function(e, txt) {
		wpWordCount.wc(txt);
	});
}(jQuery));
