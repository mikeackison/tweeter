
$(document).ready(function() {
  
  // put the jquery object in a variable
  const tweetText = $('#tweet-text');

  // on input will fire when the input changes, not limited to keystrokes
  tweetText.on('input', function() {

    // this.val() is the input from the text box in a string
    // use length to find out how long the string is
    const count = $(this).val().length;

    // compare the length against the 140 char limint
    const remaining = 140 - count;

    // access the counter from the output tag with jQuerey
    const counter = $('output.counter');

    // return html content with text() with the argument being the remaining number
    counter.text(remaining);
    
    // use addClass removeclass to change the color of the counter
    // use css to style the class
    if (count <= 140) {
      
      counter.addClass("black").removeClass("red");
    } else {
      
      counter.removeClass("black").addClass("red");
    }

  });
});
