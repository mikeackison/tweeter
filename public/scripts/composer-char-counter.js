console.log("This is a char counter test.")


$(document).ready(function() {
  // --- our code goes here ---
  console.log("This is within $(document.ready)")

  const tweetText = $('#tweet-text')
  console.log(tweetText)

  tweetText.on('input', function() {

    this.value.length
    const count = $(this).val().length
    // console.log($(this).val().length)
    // console.log( "Handler for .input() called." );
    const remaining = 140 - count

    const counter = $('output.counter')

    counter.text(remaining)

  });





});