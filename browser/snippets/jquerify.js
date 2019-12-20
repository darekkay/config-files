// jquerify.js
// https://github.com/bgrins/devtools-snippets
// Add jQuery to any page that does not have it already.

(function () {

  if ( !window.jQuery ) {
    var dollarInUse = !!window.$;
    var s = document.createElement('script');
    s.setAttribute('src', 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js');
    s.addEventListener('load', function(){
      console.log('jQuery loaded!');

      if(dollarInUse) {
        jQuery.noConflict();
        console.log('`$` already in use; use `jQuery`');
      }
    });

    document.body.appendChild(s);
  }

})();