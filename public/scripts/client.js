/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// define a fucntion createTweetElement
// take in tweet object and is responsible for returning a tweet <article>

// tweet data object will have all the data
/*
 {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
 }
(taken from initial-tweets.json)
*/



$(document).ready(function() {

  console.log('this is a client.js TEST');
  
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }




  const createTweetElement = function(tweetData) {

    const $tweet = $(`
    <article class="tweets">

    <header class="header">
      <div class="imagename">
      <img class="avatar" src="https://i.imgur.com/73hZDYK.png"> <h3 class="name">Name</h3>
      </div>

      <div class="username">
      <h3>@ID</h3>
      </div>
    </header>

    <p class="tweet">
      TWEET TEXT Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque elementum ullamcorper mi eu facilisis. Nulla viverra sapien orc.
    </p>
    
    <hr class="line">

  <footer class="footer">
   
      <p class="date">10 days ago</p>
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

  const $tweet = createTweetElement();



  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $(`#tweets-container`).append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  // $tweet.appendTo($(`#tweets-container`));

  console.log($(`#tweets-container`)); // to see what it looks like

});
