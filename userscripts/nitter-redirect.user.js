// ==UserScript==
// @name            Nitter Redirect
// @version         1.0.2
// @description     Redirect Nitter to Twitter
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/nitter-redirect.user.js
// @include         https://nitter.net/*
// @include         https://nitter.nixnet.services/*
// @grant       none
// ==/UserScript==

/**
 * Most Nitter users might want to redirect the other way around.
 * This script is useful to subscribe to Twitter accounts via Nitter/RSS but still use the Twitter Client for interactions.
 */

var url = window.location.href;
var redirectUrl = url
  .replace("nitter.net", "twitter.com")
  .replace("nitter.nixnet.services", "twitter.com");

console.log("Redirecting to Twitter: " + redirectUrl);
window.location.replace(redirectUrl);
