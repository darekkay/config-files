// ==UserScript==
// @name            Enforce English page versions
// @version         2.0.0
// @description     Automatically redirect to an English version for some services
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/enforce-english.user.js
// @run-at          document-start

// @match           https://developer.mozilla.org/*
// @match           https://addons.mozilla.org/*
// @match           https://docs.microsoft.com/*

// @grant           GM_addStyle
// ==/UserScript==


const page = {win: window, doc: document, body: document.body, url: window.location.href};
let matches;

const redirect = (location) => {
  console.log("Redirecting to: " + location);
  window.location.replace(location);
}


// Mozilla MDN
// Based on: https://addons.mozilla.org/en-US/firefox/addon/english-content/
matches = page.url.match(/^https?:\/\/developer\.mozilla\.org\/([a-z]{2,3}(?:-[a-z]{2})?)\/docs\//i);
if (matches)
{
  const locale = matches[1];
  console.log("Current locale: " + locale);
  if (locale && !locale.match(/en-us/i)) {
    redirect(page.url.replace("/" + locale + "/", "/en-us/"));
  }
}


// Mozilla Firfox Add-ons
matches = page.url.match(/^https?:\/\/addons\.mozilla\.org\/([a-z]{2,3}(?:-[a-z]{2})?)\/firefox\//i);
if (matches)
{
  const locale = matches[1];
  console.log("Current locale: " + locale);
  if (locale && !locale.match(/en-us/i)) {
    redirect(page.url.replace("/" + locale + "/", "/en-us/"));
  }
}


// Microsoft Docs
matches = page.url.match(/^https?:\/\/docs\.microsoft\.com\/([a-z]{2}-[a-z]{2})\//i);
if (matches)
{
  const locale = matches[1];
  console.log("Current locale: " + locale);
  if (locale && !locale.match(/en-us/i)) {
    redirect(page.url.replace("/" + locale + "/", "/en-us/"));
  }
}

