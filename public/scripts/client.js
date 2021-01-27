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


$(document).ready(function() {

  // console.log('this is a client.js TEST');

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
            ${tweet.content.text}
          </p>
          
          <hr class="line">

        <footer class="footer">
        
            <p class="date">${tweet.created_at}</p>
            <!-- <img class="icons" src="/images/profile-hex.png"> -->
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

    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      const $tweet = createTweetElement(tweet);

      // takes return value and appends it to the tweets container
      // // $tweet.appendTo($(`#tweets-container`));
      $(`#tweets-container`).prepend($tweet);
    }
  };

  // renderTweets(data);




  $(function() {
    $("#submit-tweet").on('submit', function() {
      // create event handler

      // prevent from submitting the form
      event.preventDefault();

      // extract the content of tweet text with val()
      const tweetText = $('#tweet-text').val();

      console.log("TWEET TEXT", tweetText);
      // console.log(this)

      const form = $(this).serialize();
      console.log(form);

      $.ajax({
        url: "/tweets",
        method: "POST",
        data: form

      }).then(console.log("SUCCESSFUL POST"));

    });
  });

  const loadTweets = function () {
    $.ajax({
      url: '/tweets', 
      method: 'GET' 
    }).then( function(data) {
      console.log("SUCCESSFUL GET", data)
      renderTweets(data)
    }).fail(() =>
    console.log("There was an error gett ing that info")
    )
  
  }


loadTweets()

});


