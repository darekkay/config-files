// ==UserScript==
// @name            Amazon Smile Redirect
// @version         1.2.0
// @description     Redirect Amazon to Amazon Smile
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/amazon-smile.user.js
// @include         http*://amazon.de/*
// @include         http*://www.amazon.de/*
// @include         http*://smile.amazon.*
// @include         http*://www.smile.amazon.*
// @grant       none
// ==/UserScript==

let redirectUrl = window.location.href;

// smile only works for logged-in users
if(!document.querySelector("a[href^='https://www.amazon.de/ap/signin'") && !redirectUrl.includes("smile.amazon")) {
  var url = window.location.href;
  redirectUrl = url
    .replace("//www.amazon", "//smile.amazon")
    .replace("//amazon.", "//smile.amazon.");
}

const productPageMatch = redirectUrl.match("smile\.amazon\.(.*)/(.*)\/dp\/");
if (productPageMatch) {
    redirectUrl = redirectUrl.replace(`/${productPageMatch[productPageMatch.length - 1]}`, "")
}

if (redirectUrl !== window.location.href) {
  console.log("Redirecting to: " + redirectUrl);
  window.location.replace(redirectUrl);
}
