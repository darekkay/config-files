// ==UserScript==
// @name            URL Cleaner
// @version         1.0.2
// @description     Clean URLs from unnecessary parameters
// @author          Darek Kay <hello@darekkay.com>
// @namespace       https://darekkay.com
// @downloadURL     https://github.com/darekkay/config-files/raw/master/userscripts/url-cleaner.user.js
// @run-at          document-start

// @include         http*://*amazon.de/*
// @include         http*://*amazon.com/*
// @include         http*://*goodreads.com/*
// @include         http*://*imdb.com/*
// @include         http*://stackoverflow.blog/*

// ==/UserScript==

const page = { url: window.location.href };

const globalQueryParameterFilter = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content"
];

const queryParameterFilter = {
  "amazon.de": ["dchild", "i", "qid", "ref", "sr", "__mk_de_DE"],
  "goodreads.com": ["from_search", "from_srp", "qid", "rank"],
  "imdb.com": ["ref_"],
  "stackoverflow.blog": []
};

// Remove domain-specific query parameters
Object.entries(queryParameterFilter).forEach(([domain, filters]) => {
  if (page.url.indexOf(domain) > -1) {
    const searchParams = new URLSearchParams(window.location.search);
    const allFilters = [...filters, ...globalQueryParameterFilter];
    if (allFilters.some(filter => searchParams.has(filter))) {
      allFilters.forEach(filter => searchParams.delete(filter));
      const queryString = searchParams.toString() ? `?${searchParams.toString()}` : "";
      window.location.replace(`${window.location.origin}${window.location.pathname}${queryString}`);
    }
  }
});
