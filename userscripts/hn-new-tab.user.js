// ==UserScript==
// @name            HN Comments in New Tab
// @version         2.0.0
// @description     Opens Hacker News comment threads in a new tab
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @icon            https://news.ycombinator.com/favicon.ico
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/hn-new-tab.user.js
// @run-at          document-start

// @match           https://news.ycombinator.com/*

// ==/UserScript==

[...document.querySelectorAll("a[href^='item?id=']")].forEach((threadLink) => {
  threadLink.setAttribute("target", "_blank");
  threadLink.setAttribute("rel", "noopener");
});
