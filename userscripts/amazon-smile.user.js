// ==UserScript==
// @name            Amazon Smile Redirect
// @version         1.0.0
// @description     Redirect Amazon to Amazon Smile
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/amazon-smile.user.js
// @include         http*://amazon.*
// @include         http*://www.amazon.*
// @exclude         http*://smile.amazon.*
// @exclude         http*://www.smile.amazon.*
// @grant       none
// ==/UserScript==

var url = window.location.href;
var redirectUrl = url
  .replace("//www.amazon", "//smile.amazon")
  .replace("//amazon.", "//smile.amazon.");

console.log("Redirecting to Amazon Smile: " + redirectUrl);
window.location.replace(redirectUrl);
