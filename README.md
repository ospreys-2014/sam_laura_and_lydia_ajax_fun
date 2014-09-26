# AJAX drill

This was an exercise I built for my friends Laura and Lydia when I went through DBC myself. It is a pretty free-form exercise, but it gives you the opportunity to play around with AJAX calls to the server and DOM manipulation with the return value.

The original plan for this exercise was to play a sort of telephone game. Person one would bind some event to the first square, send some arbitrary data to the server, get a response and then change the DOM based on the response. Person two would then do the same for the second square and try to out-do the first person creatively. I have already added functionality to the first square, so it's your turn to spice up the second!

You can pass this off to your cohort-mates, or you can play telephone with yourself.

For each square make sure that you are:  
  1. Sending some data up to the server when a user interacts with the square;  
  2. Manipulating the square (or something else in the DOM) by using the response that you get back from the server; and 
  3. Implementing another event that should reverse the DOM changes that you made upon the successful AJAX response (this doesn't need to be via AJAX, but will require JavaScript!).  

Remember to run rake db:create and rake db:migrate (since there's a silly little table involved...)
