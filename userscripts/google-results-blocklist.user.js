// ==UserScript==
// @name            Google Results Blocklist
// @version         1.0.2
// @description     Filter out Google results based on the domain
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/google-results-blocklist.user.js
// @run-at          document-end

// @include         http*://*google.*/*
// ==/UserScript==

// Based on: https://github.com/davidahmed/wiper
// See also: https://greasyfork.org/en/scripts/1682-google-hit-hider-by-domain-search-filter-block-sites
// See also: https://github.com/iorate/uBlacklist

const page = { url: window.location.href };

const blocklistURLs = ["w3schools.com", "geeksforgeeks.org", "tutorialspoint.com"];

function clearURLs(urls) {
  var i, j, arr, res, url;
  arr = [];
  res = document.querySelectorAll("div.rc");

  for (i = 0; i < res.length; i++) {
    for (j = 0; j < urls.length; j++) {
      if (res[i].firstChild.firstChild.getAttribute("href").indexOf(urls[j]) !== -1) {
        arr.push(i);
      }
    }
  }
  arr = [...new Set(arr)];

  for (i = 0; i < arr.length; i++) {
    url = res[arr[i]].firstChild.firstChild.getAttribute('href');
    console.log("Blocked URL: " + url)
    res[arr[i]].parentElement.innerHTML = "";
  }
}

clearURLs(blocklistURLs);
