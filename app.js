$(document).ready(function() {

 $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(getQuote) {
      $('.quote-text').append('<p class="text-center" id="text">'+getQuote.quote+'</p>')
 
      $('#authorName').append('<p class="text-center" id="text">'+getQuote.author+'</p>')
      
      window.latestQuote = getQuote.quote;
      window.latestAuthor = getQuote.author;
 });
  
 $('#newQuote').on('click',function() {
  $.getJSON("https://random-quote-generator.herokuapp.com/api/quotes/random", function(getQuote) {
      $('.quote-text').empty().append('<p class="text-center" id="text">'+getQuote.quote+'</p>')
 
      $('#authorName').empty().append('<p class="text-center" id="text">'+getQuote.author+'</p>')
 });
 });
 
 $('#tweet').on('click', function(){
      var url = "http://twitter.com/intent/tweet?text=\"" + window.latestQuote + "\" - " + window.latestAuthor;
      $(this).attr("href", url);
 })
 
 
 
 });