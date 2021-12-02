// ==UserScript==
// @name            HN Comments in New Tab
// @version         1.0.0
// @description     Opens Hacker News comment threads in a new tab
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/hn-new-tab.user.js
// @run-at          document-start

// @match           https://news.ycombinator.com
// @match           https://news.ycombinator.com/
// @match           https://news.ycombinator.com/news
// @match           https://news.ycombinator.com/newest
// @match           https://news.ycombinator.com/front
// @match           https://news.ycombinator.com/show

// ==/UserScript==

[...document.querySelectorAll("a[href^='item?id=']")].forEach((threadLink) => {
  threadLink.setAttribute("target", "_blank");
  threadLink.setAttribute("rel", "noopener");
});
