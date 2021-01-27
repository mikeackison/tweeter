console.log("This is a char counter test.")


$(document).ready(function() {
  
  // console.log("This is within $(document.ready)")

  // put the jquery object in a variable
  const tweetText = $('#tweet-text')

  // on input will fire when the input changes, not limited to keystrokes
  tweetText.on('input', function() {

    // this.val() is the input from the text box in a string
    // use length to find out how long the string is
    const count = $(this).val().length

    console.log($(this).val().length)
    

    // compare the lenght against the 140 char limint
    const remaining = 140 - count

    // access the counter from the output tag with jQuerey
    const counter = $('output.counter')

    // return html content with text() with the argument being the remaining number
    counter.text(remaining)

    // put in a function? returning a boolean; if the boolean is true css stays tthe same, if false, turns red
    
    // use addClass removeclass to change the color of the counter
    // use css to style the class
     if (count <= 140) {
      console.log("true")
      counter.addClass("black").removeClass("red") 
    } else {
      console.log("false")
      counter.removeClass("black").addClass("red")
    }

  });
});
