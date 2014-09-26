# AJAX drill

This was an exercise I built for my friends Laura and Lydia when I went through DBC myself. It is a pretty free-form exercise, but it gives you the opportunity to play around with AJAX calls to the server and DOM manipulation with the return value.

The original plan for this exercise was to play a sort of telephone game. Person one (me in this case) would bind some event to the first square, send some arbitrary data to the server, get a response and then change the DOM based on the response. Person two would then do the same for the second square and try to out-do the first person creatively!

You can pass this off to your cohort-mates, or you can play telephone with yourself.

For each square make sure that you are:  
1. sending some data up to the server when a user interacts with the square;  
2. manipulating the square (or something else in the DOM) by using the response that you get back from the server;  
3. implement another event that should reverse the DOM changes that you made upon the successful AJAX response (this doesn't need to be via AJAX, but will require JavaScript!).  

Remember to run rake db:create and rake db:migrate (since there's a silly little table involved...)
