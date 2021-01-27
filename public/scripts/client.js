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
 
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1611598418381
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1611684818381
  }
];

// linter is complainng about document and $ not defined?

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

  renderTweets(data);
});


