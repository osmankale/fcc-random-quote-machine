$(document).ready(function() {

 $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(getQuote) {
      $('.quote-text').append('<p class="text-center" id="text">'+getQuote.quote+'</p>')
 
      $('#authorName').append('<p class="text-center" id="text">'+getQuote.author+'</p>')
 });
  

! function(d, s, tweet) {
  var js, fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(tweet)) {
    js = d.createElement(s);
    js.id = tweet;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'twitter-wjs');
});