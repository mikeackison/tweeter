/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// define a fucntion createTweetElement
// take in tweet object and is responsible for returning a tweet <article>

// tweet data object will have all the data
/*

*/

const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}


$(document).ready(function() {

  // console.log('this is a client.js TEST');

  $(function( ) {
    $("#compose").on('click', function() {
      $(".new-tweet").toggle();
    })
  })

  const createTweetElement = function(tweet) {

    // appropriate formatting for this?
    const $tweet = $(`
          <article class="tweets">

          <header class="header">
            <div class="imagename">
            <img class="avatar" src=${tweet.user.avatars}> <h3 class="name">${tweet.user.name}</h3>
            </div>

            <div class="username">
             <h3>${tweet.user.handle}</h3>
            </div>
          </header>

          <p class="tweet">
            ${escape(tweet.content.text)}
          </p>
          
          <hr class="line">

        <footer class="footer">
        
            <p class="date">${moment(tweet.created_at).fromNow()}</p>
            <div class="icons">
              <i class="fas fa-flag"></i>
              <i class="fas fa-retweet"></i>
              <i class="fas fa-heart"></i>
            </div>
        </footer>

      </article>`);

    return $tweet;
  };
  const renderTweets = function(tweets) {
    // loops through tweets
    $(`#tweets-container`).empty();

    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);

      // takes return value and appends it to the tweets container
      // // $tweet.appendTo($(`#tweets-container`));
      
      $(`#tweets-container`).prepend($tweet);
     
    }
  };


  const hideElement = (selector) => {
    setTimeout(() => {
      $(selector).slideUp('slow')
   }, 2000)
  }
  

  $(function() {
    $("#submit-tweet").on('submit', function(e) {
      // create event handler

      // prevent from submitting the form
      e.preventDefault();

      const tweetText = $('#tweet-text').val();

      if (tweetText === '') {
        $(".empty-tweet").slideDown('slow', hideElement(".empty-tweet")) 
   
      } 
      else if (tweetText.length > 140) {
        
        $(".long-tweet").slideDown('slow', hideElement(".long-tweet"))
     
        // The form should not be cleared
        // The form should not submit

      } else {
        

        const form = $(this).serialize();
        

        $.ajax({
          url: "/tweets",
          method: "POST",
          data: form

        }).then(function(data) {
          console.log("SUCCESSFUL POST", data);
          loadTweets(data);
          // after loading tweets, need to reset/clear the tweet-text.
          $('#tweet-text').val('');

        }).fail(() =>
          console.log("There was an error getting that info")
        );

      }
    });
  });

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    }).then(function(data) {
      console.log("SUCCESSFUL GET", data);

      renderTweets(data);
    }).fail(() =>
      console.log("There was an error getting that info")
    );

  };
  loadTweets();
});


